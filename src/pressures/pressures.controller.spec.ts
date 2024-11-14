import { Test, TestingModule } from '@nestjs/testing';
import { PressuresController } from './pressures.controller';
import { PressuresService } from './pressures.service';

describe('PressuresController', () => {
  let controller: PressuresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PressuresController],
      providers: [PressuresService],
    }).compile();

    controller = module.get<PressuresController>(PressuresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
