import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePolygonDto {
  @ApiProperty({
    example: '123,123,312,312',
    description:
      'Координаты полигона два значения x и y через за пятую для каждой точки',
  })
  @IsString()
  readonly coordinates: string;
  @ApiProperty({
    example: 'Cottage',
    description: 'Название Ентити к которому привязаны полигоны',
  })
  @IsString()
  readonly entity: string;
  @ApiProperty({
    example: 1,
    description: 'Id Ентити к которому привязаны полигоны',
  })
  @IsNumber()
  readonly entityId: number;
  @ApiProperty({
    example: false,
    description: 'Тип координат bezier true ',
  })
  @IsBoolean()
  readonly type: boolean;
}
