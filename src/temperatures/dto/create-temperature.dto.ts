import { IsDecimal, IsNotEmpty, IsString } from 'class-validator';

export class CreateTemperatureDto {
	@IsString()
	@IsNotEmpty()
	deviceId: string;

	@IsDecimal()
	@IsNotEmpty()
	value: number;

	@IsDecimal()
	@IsNotEmpty()
	latitude: number;

	@IsDecimal()
	@IsNotEmpty()
	longitude: number;
}
