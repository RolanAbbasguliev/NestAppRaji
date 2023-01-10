import { Injectable, HttpStatus, HttpException } from "@nestjs/common";
import { FileType } from "./types/file.type";
import * as path from "path";
import * as fs from "fs";
import * as uuid from "uuid";

@Injectable()
export class FileService {
  createFile(type: FileType, file) {
    try {
      const fileExtension = file.originalname.split(".").pop();
      const fileName = uuid.v4() + "." + fileExtension;
      const filePath = path.resolve(__dirname, "..", "uploaded", type);
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);
      return type + "/" + fileName;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  removeFile(filename: string) {}
}
