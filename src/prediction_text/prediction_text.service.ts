import { ForbiddenException, Injectable } from '@nestjs/common';
import { GetPredictionTextDto } from './dto/create-prediction_text.dto';
import { UpdatePredictionTextDto } from './dto/update-prediction_text.dto';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Prediction } from './interfaces/prediction_text.interfaces';
import { Observable, catchError, lastValueFrom, map, } from 'rxjs'



@Injectable()
export class PredictionTextService {
  constructor(private readonly httpService: HttpService) { }

  async create(GetPredictionTextDto: GetPredictionTextDto) {

    const request = this.httpService.post('http://127.0.0.1:8000/predict', {
      text: GetPredictionTextDto.text
    }).pipe(map((res) => res.data))
    const data = await lastValueFrom(request)
    return {
      data
    }

  }

  findAll() {
    return `This action returns all predictionText`;
  }

  findOne(id: number) {
    return `This action returns a #${id} predictionText`;
  }

  update(id: number, updatePredictionTextDto: UpdatePredictionTextDto) {
    return `This action updates a #${id} predictionText`;
  }

  remove(id: number) {
    return `This action removes a #${id} predictionText`;
  }
}
