import { Module } from '@nestjs/common';
import { HumiditiesService } from './humidities.service';
import { HumiditiesController } from './humidities.controller';

@Module({
  controllers: [HumiditiesController],
  providers: [HumiditiesService],
})
export class HumiditiesModule {}
