import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cottage } from './entities/cottage.entity';
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
  async getAll() {
    const cottages = await this.cottageRepository.findAll();
    return cottages;
  }
}
