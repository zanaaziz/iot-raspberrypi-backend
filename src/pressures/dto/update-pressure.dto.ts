import { PartialType } from '@nestjs/mapped-types';
import { CreatePressureDto } from './create-pressure.dto';

export class UpdatePressureDto extends PartialType(CreatePressureDto) {}
