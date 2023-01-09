import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Cottage } from '../../cottage/entities/cottage.entity';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
@ApiTags('Коттеджный поселок, деревня')
@Table({ tableName: 'village' })
export class Village extends Model<Model> {
  @HasMany(() => Cottage)
  cottages: Cottage[];
  @ApiProperty({
    example: 'Простоквашино',
    description: 'Название коттеджного поселка',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;
  @Column({ type: DataType.INTEGER, allowNull: true })
  externalId: number;
}
