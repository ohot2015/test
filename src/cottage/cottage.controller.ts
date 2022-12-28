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
import { UpdateCottageDto } from './dto/update-cottage.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cottage } from './entities/cottage.entity';

@ApiTags('Коттедж')
@Controller('cottage')
export class CottageController {
  constructor(private readonly cottageService: CottageService) {}
  @ApiOperation({ summary: 'Создание коттеджного поселка' })
  @ApiResponse({ status: 200, type: Cottage })
  @Post()
  create(@Body() cottageDto: CreateCottageDto) {
    return this.cottageService.create(cottageDto);
  }
  @ApiOperation({ summary: 'Получение коттеджей по id Деревни' })
  @ApiResponse({ status: 200, type: [Cottage] })
  @Get(':villageId')
  findByVillage(@Param('villageId') villageId: string) {
    return this.cottageService.findByVillage(+villageId);
  }
  @ApiOperation({ summary: 'Обновление коттеджа по id' })
  @ApiResponse({ status: 200, type: Cottage })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCottageDto: UpdateCottageDto) {
    return this.cottageService.update(+id, updateCottageDto);
  }
  @ApiOperation({ summary: 'Удаление коттеджа по id' })
  @ApiResponse({ status: 200, type: Cottage })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cottageService.remove(+id);
  }
}
