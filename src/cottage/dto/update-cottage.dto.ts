import { IsNumber } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCottageDto } from './create-cottage.dto';

export class UpdateCottageDto extends PartialType(CreateCottageDto) {
  @ApiProperty({ example: 1, description: 'Этажность коттеджа' })
  @IsNumber()
  readonly floors: number;
  @ApiProperty({ example: 1, description: 'Id деревни' })
  readonly villageId: number;
}
