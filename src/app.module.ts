import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemperaturesModule } from './temperatures/temperatures.module';
import { HumiditiesModule } from './humidities/humidities.module';
import { PressuresModule } from './pressures/pressures.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
	imports: [ConfigModule.forRoot(), PrismaModule, TemperaturesModule, HumiditiesModule, PressuresModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
