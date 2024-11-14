import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemperaturesModule } from './temperatures/temperatures.module';
import { HumiditiesModule } from './humidities/humidities.module';
import { PressuresModule } from './pressures/pressures.module';

@Module({
  imports: [TemperaturesModule, HumiditiesModule, PressuresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
