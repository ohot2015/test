import { IsNumber } from 'class-validator';
import { Village } from '../../village/entities/village.entity';

export class CreateCottageDto {
  @IsNumber()
  readonly floors: number;
  @IsNumber()
  readonly villageId: number;
}
