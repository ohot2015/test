import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cottage } from './entities/cottage.entity';
import { CreateCottageDto } from './dto/create-cottage.dto';
import { VillageService } from '../village/village.service';
import { CottageController } from './cottage.controller';
import { UpdateCottageDto } from './dto/update-cottage.dto';

@Injectable()
export class CottageService {
  constructor(
    @InjectModel(Cottage) private cottageRepository: typeof Cottage,
    private villageService: VillageService,
  ) {}
  async create(dto: CreateCottageDto) {
    let cottage;
    try {
      cottage = await this.cottageRepository.create(dto);
    } catch (e) {
      if (e.name === 'SequelizeForeignKeyConstraintError') {
        throw new HttpException(
          'Не найден коттеджный поселок',
          HttpStatus.NOT_FOUND,
        );
      }
    }
    return cottage;
  }
  async findByVillage(villageId: number) {
    const cottages = await this.cottageRepository.findAll({
      where: { villageId: villageId },
    });
    return cottages;
  }
  async update(id: number, updateCottageDto: UpdateCottageDto) {
    const cottage = await this.cottageRepository.findByPk(id);
    if (!cottage) {
      throw new HttpException('Коттедж не найден', HttpStatus.NOT_FOUND);
    }
    Object.assign(cottage, updateCottageDto);

    return await cottage.save();
  }
  async remove(id: number) {
    const cottage = await this.cottageRepository.findByPk(id);
    return await cottage.destroy();
  }
}
