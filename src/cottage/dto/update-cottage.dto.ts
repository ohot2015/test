import { IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { CreateCottageDto } from './create-cottage.dto';

export class UpdateCottageDto extends PartialType(CreateCottageDto) {
  @IsNumber()
  readonly floors: number;
  @IsNumber()
  readonly villageId: number;
}
