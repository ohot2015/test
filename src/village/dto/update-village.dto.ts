import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateVillageDto } from './create-village.dto';
import { IsString } from 'class-validator';

export class UpdateVillageDto extends PartialType(CreateVillageDto) {
  @ApiProperty({ example: 'Простоквашино', description: 'Название деревни' })
  @IsString()
  readonly name: string;
}
