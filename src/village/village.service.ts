import { Injectable } from '@nestjs/common';
import { CreateVillageDto } from './dto/create-village.dto';
import { UpdateVillageDto } from './dto/update-village.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Village } from './entities/village.entity';

@Injectable()
export class VillageService {
  constructor(
    @InjectModel(Village) private villageRepository: typeof Village,
  ) {}

  async create(dto: CreateVillageDto) {
    return await this.villageRepository.create(dto);
  }
  async findAll() {
    return await this.villageRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} village`;
  }

  update(id: number, updateVillageDto: UpdateVillageDto) {
    return `This action updates a #${id} village`;
  }

  remove(id: number) {
    return `This action removes a #${id} village`;
  }
}
