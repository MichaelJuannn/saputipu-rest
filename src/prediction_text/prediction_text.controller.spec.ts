import { Test, TestingModule } from '@nestjs/testing';
import { PredictionTextController } from './prediction_text.controller';
import { PredictionTextService } from './prediction_text.service';

describe('PredictionTextController', () => {
  let controller: PredictionTextController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PredictionTextController],
      providers: [PredictionTextService],
    }).compile();

    controller = module.get<PredictionTextController>(PredictionTextController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
