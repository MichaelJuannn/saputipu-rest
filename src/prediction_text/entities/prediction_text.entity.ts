import { ApiProperty } from '@nestjs/swagger';

export class PredictionText {}

export class Prediction {
  @ApiProperty()
  scam: number;
  @ApiProperty()
  spam: number;
  @ApiProperty()
  neutral: number;
}
