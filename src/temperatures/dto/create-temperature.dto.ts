import { IsDecimal, IsNotEmpty, IsString } from 'class-validator';

export class CreateTemperatureDto {
	@IsString()
	@IsNotEmpty()
	deviceId: string;

	@IsDecimal()
	@IsNotEmpty()
	value: number;
}
