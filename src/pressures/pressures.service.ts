import { Injectable } from '@nestjs/common';
import { CreatePressureDto } from './dto/create-pressure.dto';
import { UpdatePressureDto } from './dto/update-pressure.dto';

@Injectable()
export class PressuresService {
  create(createPressureDto: CreatePressureDto) {
    return 'This action adds a new pressure';
  }

  findAll() {
    return `This action returns all pressures`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pressure`;
  }

  update(id: number, updatePressureDto: UpdatePressureDto) {
    return `This action updates a #${id} pressure`;
  }

  remove(id: number) {
    return `This action removes a #${id} pressure`;
  }
}
