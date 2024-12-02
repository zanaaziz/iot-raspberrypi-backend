import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HumiditiesService } from './humidities.service';
import { CreateHumidityDto } from './dto/create-humidity.dto';
import { UpdateHumidityDto } from './dto/update-humidity.dto';

@Controller('humidities')
export class HumiditiesController {
	constructor(private readonly humiditiesService: HumiditiesService) {}

	@Post()
	create(@Body() createHumidityDto: CreateHumidityDto) {
		return this.humiditiesService.create(createHumidityDto);
	}

	@Get()
	findAll() {
		return this.humiditiesService.findAll();
	}

	//   @Get(':id')
	//   findOne(@Param('id') id: string) {
	//     return this.humiditiesService.findOne(+id);
	//   }

	//   @Patch(':id')
	//   update(@Param('id') id: string, @Body() updateHumidityDto: UpdateHumidityDto) {
	//     return this.humiditiesService.update(+id, updateHumidityDto);
	//   }

	//   @Delete(':id')
	//   remove(@Param('id') id: string) {
	//     return this.humiditiesService.remove(+id);
	//   }
}
