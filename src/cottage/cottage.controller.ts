import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CottageService } from './cottage.service';
import { CreateCottageDto } from './dto/create-cottage.dto';
import { UpdateVillageDto } from '../village/dto/update-village.dto';
import { UpdateCottageDto } from './dto/update-cottage.dto';

@Controller('cottage')
export class CottageController {
  constructor(private readonly cottageService: CottageService) {}
  @Post()
  create(@Body() cottageDto: CreateCottageDto) {
    return this.cottageService.create(cottageDto);
  }
  @Get(':villageId')
  findByVillage(@Param('villageId') villageId: string) {
    console.log(villageId);
    return this.cottageService.findByVillage(+villageId);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCottageDto: UpdateCottageDto) {
    return this.cottageService.update(+id, updateCottageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cottageService.remove(+id);
  }
}
