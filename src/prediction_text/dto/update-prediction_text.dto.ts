import { PartialType } from '@nestjs/mapped-types';
import { GetPredictionTextDto } from './create-prediction_text.dto';

export class UpdatePredictionTextDto extends PartialType(GetPredictionTextDto) { }
