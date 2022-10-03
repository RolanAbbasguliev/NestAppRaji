import {Module} from "@nestjs/common";
import { FileService } from "../file/file.service";
import { TrackController } from "./track.controller";
import { TrackService } from "./track.service";

@Module({
    controllers: [TrackController],
    providers: [TrackService, FileService]
})
export class TrackModule {}