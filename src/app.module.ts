import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PredictionTextModule } from './prediction_text/prediction_text.module';

@Module({
  imports: [PredictionTextModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
