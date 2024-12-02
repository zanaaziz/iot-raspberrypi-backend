import { Injectable } from '@nestjs/common';
import { CreateTemperatureDto } from './dto/create-temperature.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TemperaturesService {
	constructor(private readonly prisma: PrismaService) {}

	create(data: CreateTemperatureDto) {
		return this.prisma.temperature.create({ data });
	}

	findAll() {
		return this.prisma.temperature.findMany({
			orderBy: [
				{
					createdAt: 'desc',
				},
			],
		});
	}

	//   findOne(id: number) {
	//     return `This action returns a #${id} temperature`;
	//   }

	//   update(id: number, updateTemperatureDto: UpdateTemperatureDto) {
	//     return `This action updates a #${id} temperature`;
	//   }

	//   remove(id: number) {
	//     return `This action removes a #${id} temperature`;
	//   }
}
