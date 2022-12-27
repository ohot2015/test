import { IsNumber, IsObject, IsString } from 'class-validator';

export class CreateCottageDto {
  @IsString()
  readonly floors: number;
  @IsNumber()
  readonly village: number;
}
