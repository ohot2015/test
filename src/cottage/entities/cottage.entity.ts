import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Village } from '../../village/entities/village.entity';

@Table({ tableName: 'cottage' })
export class Cottage extends Model<Cottage> {
  @Column({ type: DataType.INTEGER, allowNull: true })
  floors: number;

  @ForeignKey(() => Village)
  villageId: number;

  @BelongsTo(() => Village)
  village: Village;
}
