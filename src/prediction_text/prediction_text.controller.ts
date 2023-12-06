import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PredictionTextService } from './prediction_text.service';
import { GetPredictionTextDto } from './dto/create-prediction_text.dto';
import { UpdatePredictionTextDto } from './dto/update-prediction_text.dto';

@Controller('prediction-text')
export class PredictionTextController {
  constructor(private readonly predictionTextService: PredictionTextService) { }

  @Post()
  getPrediction(@Body() GetPredictionTextDto: GetPredictionTextDto) {
    return this.predictionTextService.create(GetPredictionTextDto);
  }
  @Get()
  getText() {
    return this.predictionTextService.findAll()
  }
}
