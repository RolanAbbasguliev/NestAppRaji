import { IsEmail, IsNotEmpty, IsString, IsOptional, IsDefined } from "class-validator";

export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    isAdmin: boolean;
}






