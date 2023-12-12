import { IsNotEmpty, IsString } from 'class-validator';

export class GetPredictionTextDto {
  @IsNotEmpty()
  @IsString()
  text: string;
}
