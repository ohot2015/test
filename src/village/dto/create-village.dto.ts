import { Cottage } from '../../cottage/entities/cottage.entity';
import { IsArray, IsString } from 'class-validator';

export class CreateVillageDto {
  @IsString()
  readonly name: string;
}
