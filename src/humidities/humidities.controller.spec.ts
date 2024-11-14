import { Test, TestingModule } from '@nestjs/testing';
import { HumiditiesController } from './humidities.controller';
import { HumiditiesService } from './humidities.service';

describe('HumiditiesController', () => {
  let controller: HumiditiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HumiditiesController],
      providers: [HumiditiesService],
    }).compile();

    controller = module.get<HumiditiesController>(HumiditiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
