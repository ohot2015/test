import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async findOne(id: number) {
    return await this.villageRepository.findOne({ where: { id } });
  }

  async update(id: number, updateVillageDto: UpdateVillageDto) {
    const village = await this.villageRepository.findByPk(id);
    if (!village) {
      throw new HttpException(
        'Не найден коттеджный поселок',
        HttpStatus.NOT_FOUND,
      );
    }
    Object.assign(village, updateVillageDto);
    return await village.save();
  }

  async remove(id: number) {
    const village = await this.villageRepository.findByPk(id);
    if (!village) {
      throw new HttpException(
        'Не найден коттеджный поселок',
        HttpStatus.NOT_FOUND,
      );
    }

    return await village.destroy();
  }
}
