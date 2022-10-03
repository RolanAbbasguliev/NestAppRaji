"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackService = void 0;
const prisma_service_1 = require("./../prisma/prisma.service");
const common_1 = require("@nestjs/common");
const file_service_1 = require("../file/file.service");
const file_type_1 = require("../file/types/file.type");
let TrackService = class TrackService {
    constructor(prisma, fileService) {
        this.prisma = prisma;
        this.fileService = fileService;
    }
    async create(dto, coverImg, audioFile) {
        const audioPath = this.fileService.createFile(file_type_1.FileType.AUDIO, audioFile);
        const coverPath = this.fileService.createFile(file_type_1.FileType.COVER, coverImg);
        const admin = await this.prisma.user.findUnique({
            where: {
                email: "rajirecords@gmail.com",
            },
            select: {
                id: true,
            },
        });
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
};
TrackService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        file_service_1.FileService])
], TrackService);
exports.TrackService = TrackService;
//# sourceMappingURL=track.service.js.map