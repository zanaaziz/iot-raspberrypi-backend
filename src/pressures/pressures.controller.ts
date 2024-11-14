import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PressuresService } from './pressures.service';
import { CreatePressureDto } from './dto/create-pressure.dto';
import { UpdatePressureDto } from './dto/update-pressure.dto';

@Controller('pressures')
export class PressuresController {
  constructor(private readonly pressuresService: PressuresService) {}

  @Post()
  create(@Body() createPressureDto: CreatePressureDto) {
    return this.pressuresService.create(createPressureDto);
  }

  @Get()
  findAll() {
    return this.pressuresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pressuresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePressureDto: UpdatePressureDto) {
    return this.pressuresService.update(+id, updatePressureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pressuresService.remove(+id);
  }
}
