import { IsString, IsNotEmpty } from "class-validator";

export class CreateTrackDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  artist: string;
}
