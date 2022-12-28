import { Injectable } from '@nestjs/common';
import { CreateDecorationDto } from './dto/create-decoration.dto';
import { UpdateDecorationDto } from './dto/update-decoration.dto';

@Injectable()
export class DecorationService {
  create(createDecorationDto: CreateDecorationDto) {
    return 'This action adds a new decoration';
  }

  findAll() {
    return `This action returns all decoration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} decoration`;
  }

  update(id: number, updateDecorationDto: UpdateDecorationDto) {
    return `This action updates a #${id} decoration`;
  }

  remove(id: number) {
    return `This action removes a #${id} decoration`;
  }
}
