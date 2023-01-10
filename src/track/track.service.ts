import { Track } from "./types/track.type";
import { CreateTrackDto } from "./dto/track.dto";
import { PrismaService } from "./../prisma/prisma.service";
import { Injectable, ForbiddenException } from "@nestjs/common";
import { FileService } from "../file/file.service";
import { FileType } from "../file/types/file.type";

@Injectable()
export class TrackService {
  constructor(
    private prisma: PrismaService,
    private fileService: FileService
  ) {}

  async create(dto: CreateTrackDto, coverImg, audioFile): Promise<Track> {
    const audioPath = this.fileService.createFile(FileType.AUDIO, audioFile);
    const coverPath = this.fileService.createFile(FileType.COVER, coverImg);

    console.log(coverImg, audioFile);

    if (coverImg.originalname != ("jpeg" || "png" || "jpg") )
      throw new ForbiddenException("Cover format bad");

    if (audioFile.originalname != ("mp3" || "wav"))
      throw new ForbiddenException("Audio format bad");

    const admin = await this.prisma.user.findUnique({
      where: {
        email: "rajirecords@gmail.com",
      },
      select: {
        id: true,
      },
    });

    if (!admin) 
      throw new ForbiddenException("user not found");

    const track = await this.prisma.track.create({
      data: {
        name: dto.name,
        artist: dto.artist,
        audioFile: audioPath,
        coverImg: coverPath,
        userId: admin.id,
      },
    });
    return track;
  }

  // async create(dto: CreateTrackDto): Promise<Track> {
  //     const track = await this.prisma.track.create({
  //         data: {
  //             name: dto.name,
  //             artist: dto.artist,

  //         },

  //     });
  // }
}
