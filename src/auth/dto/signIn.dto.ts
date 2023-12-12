import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
IsEmail();
export class signInDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @Length(8)
  password: string;
}
