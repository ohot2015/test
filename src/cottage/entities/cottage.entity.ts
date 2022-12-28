import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Village } from '../../village/entities/village.entity';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'cottage' })
export class Cottage extends Model<Cottage> {
  @Column({ type: DataType.INTEGER, allowNull: true })
  floors: number;
  @ApiProperty({ example: '122.3', description: 'Площадь коттеджа' })
  @Column({ type: DataType.STRING, allowNull: true })
  sq: string;
  @ForeignKey(() => Village)
  villageId: number;

  @BelongsTo(() => Village)
  village: Village;
}
