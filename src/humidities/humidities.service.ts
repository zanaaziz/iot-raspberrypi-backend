import { Injectable } from '@nestjs/common';
import { CreateHumidityDto } from './dto/create-humidity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HumiditiesService {
	constructor(private readonly prisma: PrismaService) {}

	create(data: CreateHumidityDto) {
		return this.prisma.humidity.create({ data });
	}

	findAll() {
		return this.prisma.humidity.findMany();
	}
}
