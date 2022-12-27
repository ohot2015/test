import { Injectable } from '@nestjs/common';
import { CreatePolygonDto } from './dto/create-polygon.dto';
import { Polygon } from './entities/polygon.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PolygonService {
  constructor(
    @InjectModel(Polygon) private polygonRepository: typeof Polygon,
  ) {}
  async create(dto: CreatePolygonDto) {
    return await this.polygonRepository.create(dto);
  }
  async findByEntity(id: number) {
    return await this.polygonRepository.sequelize.query(`
      select * from polygon as p
      left join cottage as c ON c.id = p.entityId
      where c.id = ${id}
    `);
  }
}
