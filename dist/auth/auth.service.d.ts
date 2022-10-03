import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import { JwtService } from "@nestjs/jwt";
import { Tokens } from "./types";
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    signup(dto: AuthDto): Promise<Tokens>;
    signin(dto: AuthDto): Promise<Tokens>;
    logout(userId: number): Promise<void>;
    refreshTokens(userId: number, rt: string): Promise<Tokens>;
    updateRtHash(userId: number, rt: string): Promise<void>;
    hashData(data: string): Promise<string>;
    getTokens(userId: number, email: string): Promise<Tokens>;
}
