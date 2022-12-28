import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'polygon' })
export class Polygon extends Model<Polygon> {
  @ApiProperty({
    example: false,
    description: 'Тип координат bezier true ',
  })
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  type: boolean;
  @ApiProperty({
    example: '123,123',
    description:
      'Координаты полигона два значения x и y через за пятую для каждой точки',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  coordinates: string;
  @ApiProperty({
    example: 'Cottage',
    description: 'Название Ентити к которому привязаны полигоны',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  entity: string;
  @ApiProperty({
    example: 1,
    description: 'Id Ентити к которому привязаны полигоны',
  })
  @Column({ type: DataType.INTEGER, allowNull: false })
  entityId: number;
}
