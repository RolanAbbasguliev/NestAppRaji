import { Track } from "./types/track.type";
import { CreateTrackDto } from "./dto/track.dto";
import { TrackService } from "./track.service";
import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseInterceptors,
  UploadedFiles,
} from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";

@Controller("tracks")
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Post("create")
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: "audio", maxCount: 1 },
      { name: "cover", maxCount: 1 },
    ])
  )
  @HttpCode(HttpStatus.OK)
  create(@UploadedFiles() files, @Body() dto: CreateTrackDto): Promise<Track> {
    const { cover, audio } = files;
    return this.trackService.create(dto, cover[0], audio[0]);
  }

  @Get()
  getAll(): string {
    return "sf";
  }

  getOne() {}

  remove() {}
}
