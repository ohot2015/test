import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVillageDto {
  @ApiProperty({ example: 'Простоквашино', description: 'Название деревни' })
  @IsString()
  readonly name: string;
}
