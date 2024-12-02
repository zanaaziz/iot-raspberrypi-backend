import { IsDecimal, IsNotEmpty, IsString } from 'class-validator';

export class CreatePressureDto {
	@IsString()
	@IsNotEmpty()
	deviceId: string;

	@IsDecimal()
	@IsNotEmpty()
	value: number;
}
