import { Module } from '@nestjs/common';
import { PressuresService } from './pressures.service';
import { PressuresController } from './pressures.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	controllers: [PressuresController],
	providers: [PressuresService],
})
export class PressuresModule {}
