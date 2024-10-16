import { IsEmail, MinLength} from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email:string

    @MinLength(8, {message: 'Password must be no more than 6 symbols'})
    password:string
}
