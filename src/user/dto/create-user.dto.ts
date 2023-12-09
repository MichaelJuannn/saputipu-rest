import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsString } from 'class-validator';

export class CreateUserDto {
  email: string;
  name: string;
  password: string;
}

export class newUser {
  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  name: string;
}

export class updatedUser {
  @ApiProperty()
  @IsString()
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
