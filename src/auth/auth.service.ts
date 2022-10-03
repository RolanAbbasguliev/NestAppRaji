import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

import { Tokens } from "./types";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) { }

  async signup(dto: AuthDto): Promise<Tokens> {
    const hash = await this.hashData(dto.password);

    const checkUser = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (checkUser) {
      throw new ForbiddenException("User already exists");
    }
    if (dto.email === "rajirecords@gmail.com") {
      dto.isAdmin = true;
    }
    const newUser = await this.prisma.user.create({
      data: {
        email: dto.email,
        isAdmin: dto.isAdmin,
        hash,
      },
    });

    const tokens = await this.getTokens(newUser.id, newUser.email);
    await this.updateRtHash(newUser.id, tokens.refresh_token);
    return tokens;
  }

  async signin(dto: AuthDto): Promise<Tokens> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) throw new ForbiddenException("User not found");

    const passwordMatches = await bcrypt.compare(dto.password, user.hash);
    if (!passwordMatches) throw new ForbiddenException("Password incorrect");

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);
    return tokens;
  }

  async logout(userId: number) {
    await this.prisma.user.updateMany({
      where: {
        id: userId,
        hashedRt: {
          not: null,
        },
      },
      data: {
        hashedRt: null,
      },
    });
  }

  async refreshTokens(userId: number, rt: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user || !user.hashedRt) throw new ForbiddenException("Access denied");

    const rtMatches = bcrypt.compare(rt, user.hashedRt);

    if (!rtMatches) throw new ForbiddenException("Rt doesn't match");

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);
    return tokens;
  }

  async updateRtHash(userId: number, rt: string) {
    const hash = await this.hashData(rt);
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        hashedRt: hash,
      },
    });
  }

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async getTokens(userId: number, email: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: "at-secret", //config
          expiresIn: 60 * 15, //15 min  -- express in sec
        }
      ),

      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: "rt-secret",
          expiresIn: 60 * 60 * 24 * 7, //7DAY  -- express in sec
        }
      ),
    ]);
    return {
      access_token: at,
      refresh_token: rt,
    };
  }

  // async isAdmin(userId: number) {
  //   const user = await this.prisma.user.findUnique({
  //     where: {
  //       id: userId,
  //     },
  //   });
  //   return user.isAdmin;
  // }
}
