import { Test, TestingModule } from '@nestjs/testing';
import { PredictionTextService } from './prediction_text.service';

describe('PredictionTextService', () => {
  let service: PredictionTextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PredictionTextService],
    }).compile();

    service = module.get<PredictionTextService>(PredictionTextService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
