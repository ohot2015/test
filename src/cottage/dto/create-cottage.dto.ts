import { IsNumber } from 'class-validator';

export class CreateCottageDto {
  @IsNumber()
  readonly floors: number;
}
