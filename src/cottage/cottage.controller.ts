import { Body, Controller, Get, Post } from '@nestjs/common';
import { CottageService } from './cottage.service';
import { CreateCottageDto } from './dto/create-cottage.dto';

@Controller('cottage')
export class CottageController {
  constructor(private readonly cottageService: CottageService) {}
  @Post()
  create(@Body() cottageDto: CreateCottageDto) {
    return this.cottageService.create(cottageDto);
  }
  @Get()
  getAll() {
    return this.cottageService.getAll();
  }
}
