import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'polygon' })
export class Polygon extends Model<Polygon> {
  @ApiProperty({
    example: 'true|false',
    description: 'Тип координат bezier true ',
  })
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  type: boolean;

  @Column({ type: DataType.STRING, allowNull: true })
  coordinates: string;

  @Column({ type: DataType.STRING, defaultValue: 'realty' })
  entity: string;

  @Column({ type: DataType.INTEGER, defaultValue: 999 })
  entityId: number;
}
