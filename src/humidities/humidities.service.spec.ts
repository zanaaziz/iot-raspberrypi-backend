import { Test, TestingModule } from '@nestjs/testing';
import { HumiditiesService } from './humidities.service';

describe('HumiditiesService', () => {
  let service: HumiditiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HumiditiesService],
    }).compile();

    service = module.get<HumiditiesService>(HumiditiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
