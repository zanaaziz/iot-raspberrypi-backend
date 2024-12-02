import { Injectable } from '@nestjs/common';
import { CreatePressureDto } from './dto/create-pressure.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PressuresService {
	constructor(private readonly prisma: PrismaService) {}

	create(data: CreatePressureDto) {
		return this.prisma.pressure.create({ data });
	}

	findAll() {
		return this.prisma.pressure.findMany({
			orderBy: [
				{
					createdAt: 'desc',
				},
			],
		});
	}
}
