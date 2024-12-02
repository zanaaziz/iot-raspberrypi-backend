import { Module } from '@nestjs/common';
import { HumiditiesService } from './humidities.service';
import { HumiditiesController } from './humidities.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	controllers: [HumiditiesController],
	providers: [HumiditiesService],
})
export class HumiditiesModule {}
