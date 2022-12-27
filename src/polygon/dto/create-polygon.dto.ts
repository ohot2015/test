import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreatePolygonDto {
  @IsString()
  readonly coordinates: string;
  @IsString()
  readonly entity: string;
  @IsNumber()
  readonly entityId: number;
  @IsBoolean()
  readonly type: boolean;
}
