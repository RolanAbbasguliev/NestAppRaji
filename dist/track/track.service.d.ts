import { Track } from "./types/track.type";
import { CreateTrackDto } from "./dto/track.dto";
import { PrismaService } from "./../prisma/prisma.service";
import { FileService } from "../file/file.service";
export declare class TrackService {
    private prisma;
    private fileService;
    constructor(prisma: PrismaService, fileService: FileService);
    create(dto: CreateTrackDto, coverImg: any, audioFile: any): Promise<Track>;
}
