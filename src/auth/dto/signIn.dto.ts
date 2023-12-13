import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
IsEmail();
export class signInDto {
  @ApiProperty({ example: 'user@domain.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @Length(8)
  password: string;
}
