import { Test, TestingModule } from '@nestjs/testing';
import { PressuresService } from './pressures.service';

describe('PressuresService', () => {
  let service: PressuresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PressuresService],
    }).compile();

    service = module.get<PressuresService>(PressuresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
