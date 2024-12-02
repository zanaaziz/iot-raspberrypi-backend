import { IsNotEmpty, IsDecimal, IsString } from 'class-validator';

export class CreateHumidityDto {
	@IsString()
	@IsNotEmpty()
	deviceId: string;

	@IsDecimal()
	@IsNotEmpty()
	value: number;
}
