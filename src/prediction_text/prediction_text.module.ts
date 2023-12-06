import { Module } from '@nestjs/common';
import { PredictionTextService } from './prediction_text.service';
import { PredictionTextController } from './prediction_text.controller';
import { HttpModule } from '@nestjs/axios';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [PredictionTextController],
  providers: [PredictionTextService, PrismaService],
})
export class PredictionTextModule {}
