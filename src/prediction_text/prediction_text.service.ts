import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, lastValueFrom, map } from 'rxjs';
import { GetPredictionTextDto } from './dto/create-prediction_text.dto';
import { UpdatePredictionTextDto } from './dto/update-prediction_text.dto';
import { Prediction } from './interfaces/prediction_text.interfaces';



@Injectable()
export class PredictionTextService {
  constructor(private readonly httpService: HttpService) { }

  async create(GetPredictionTextDto: GetPredictionTextDto) {

    const request = this.httpService.post('http://127.0.0.1:8000/predict', {
      text: GetPredictionTextDto.text
    }).pipe(map((res) => res.data)).pipe(
      catchError(() => {
        throw new ForbiddenException("API not available")
      })
    )
    const data = await lastValueFrom<Prediction>(request)
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
