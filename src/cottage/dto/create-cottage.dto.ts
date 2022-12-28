import { IsNumber, IsString } from 'class-validator';
import { Village } from '../../village/entities/village.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCottageDto {
  @ApiProperty({ example: 1, description: 'Этажность коттеджа' })
  @IsNumber()
  readonly floors: number;
  @ApiProperty({ example: '123.2', description: 'Площадь коттеджа' })
  @IsString()
  readonly sq: string;
  @ApiProperty({ example: 1, description: 'Id деревни' })
  @IsNumber()
  readonly villageId: number;
}
