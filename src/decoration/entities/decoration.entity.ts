import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'decoration' })
export class Decoration extends Model<Model> {
  @Column
  name: string;

  @Column({ type: DataType.ARRAY })
  img: [];

  @Column({ type: DataType.FLOAT })
  price: number;
}
