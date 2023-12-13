import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsDateString,
  IsEmail,
  IsString,
  isEmail,
  IsNotEmpty,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'users@domain.com' })
  @IsEmail()
  email: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @Length(8)
  password: string;
}

export class newUser {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  name: string;
}

export class updatedUser {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsDateString()
  createdAt: Date;
}

export class userReport {
  @ApiProperty()
  id: string;
  @ApiProperty()
  nomor_rekening_id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  body: string;
  @ApiProperty()
  evidence: string;
  @ApiProperty()
  user_id: number;
  @ApiProperty()
  status: string;
  @ApiProperty()
  createdAt: Date;
}
