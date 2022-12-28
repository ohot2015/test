import { IsNumber, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCottageDto } from './create-cottage.dto';

export class UpdateCottageDto extends PartialType(CreateCottageDto) {
  @ApiProperty({ example: 1, description: 'Этажность коттеджа' })
  @IsNumber()
  readonly floors: number;
  @ApiProperty({ example: '123.2', description: 'Площадь коттеджа' })
  @IsString()
  readonly sq: string;
  @ApiProperty({ example: 1, description: 'Id деревни' })
  readonly villageId: number;
}
