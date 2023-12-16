import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, lastValueFrom, map } from 'rxjs';
import { GetPredictionTextDto } from './dto/create-prediction_text.dto';
import { UpdatePredictionTextDto } from './dto/update-prediction_text.dto';
import { Prediction } from './interfaces/prediction_text.interfaces';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PredictionTextService {
  constructor(
    private readonly httpService: HttpService,
    private prisma: PrismaService,
  ) {}

  async create(GetPredictionTextDto: GetPredictionTextDto) {
    const prediction_text = this.prisma.prediction_Text.create({
      data: {
        text: GetPredictionTextDto.text,
      },
    });

    const request = this.httpService
      .post(`${process.env.MODEL_IP}/predict`, {
        text: GetPredictionTextDto.text,
      })
      .pipe(map((res) => res.data))
      .pipe(
        catchError((err) => {
          throw new ForbiddenException('API not available');
        }),
      );
    const data = await lastValueFrom<Prediction>(request);
    return {
      data,
    };
  }

  findAll() {
    return `This action returns  predictionText`;
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
