import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cottage } from './entities/cattage.entity';
import { Polygon } from '../polygon/entities/polygon.entity';
import { CreateCottageDto } from './dto/create-cottage.dto';

@Injectable()
export class CottageService {
  constructor(
    @InjectModel(Cottage) private cottageRepository: typeof Cottage,
  ) {}
  async create(dto: CreateCottageDto) {
    const cottage = await this.cottageRepository.create(dto);
    return cottage;
  }
}
