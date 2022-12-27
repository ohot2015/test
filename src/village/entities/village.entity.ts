import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Cottage } from '../../cottage/entities/cottage.entity';

@Table({ tableName: 'village' })
export class Village extends Model<Model> {
  @HasMany(() => Cottage, { foreignKey: 'id' })
  cottages: Cottage[];

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;
}
