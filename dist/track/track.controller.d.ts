import { Track } from "./types/track.type";
import { CreateTrackDto } from "./dto/track.dto";
import { TrackService } from "./track.service";
export declare class TrackController {
    private trackService;
    constructor(trackService: TrackService);
    create(files: any, dto: CreateTrackDto): Promise<Track>;
    getAll(): string;
    getOne(): void;
    remove(): void;
}
