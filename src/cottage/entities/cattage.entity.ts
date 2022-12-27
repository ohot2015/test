import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'cottage' })
export class Cottage extends Model<Cottage> {
  @Column({ type: DataType.INTEGER, allowNull: true })
  floors: number;
}
