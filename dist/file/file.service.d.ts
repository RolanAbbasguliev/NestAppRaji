import { FileType } from "./types/file.type";
export declare class FileService {
    createFile(type: FileType, file: any): string;
    removeFile(filename: string): void;
}
