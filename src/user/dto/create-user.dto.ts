import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsInt()
    @IsNotEmpty()
    contactNumber: number;

    @IsNotEmpty()
    @IsString()
    password: string;

}
