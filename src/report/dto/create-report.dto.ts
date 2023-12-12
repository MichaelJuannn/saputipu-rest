import { IsNotEmpty, IsNumberString, Length } from 'class-validator';

export class CreateReportDto {
  @IsNumberString()
  @Length(10, 17)
  account_number: string;
  @IsNotEmpty()
  @Length(1, 250)
  title: string;
  @IsNotEmpty()
  @Length(1, 2000)
  description: string;
  evidence: string;
}
