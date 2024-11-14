import { Module } from '@nestjs/common';
import { PressuresService } from './pressures.service';
import { PressuresController } from './pressures.controller';

@Module({
  controllers: [PressuresController],
  providers: [PressuresService],
})
export class PressuresModule {}
