import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { PolygonService } from './polygon.service';
import { CreatePolygonDto } from './dto/create-polygon.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cottage } from '../cottage/entities/cottage.entity';

@ApiTags('Полигоны')
@Controller('polygon')
export class PolygonController {
  constructor(private readonly polygonService: PolygonService) {}
  @ApiOperation({ summary: 'Создание полигона' })
  @ApiResponse({ status: 200, type: Cottage })
  @Post()
  create(@Body() polyDto: CreatePolygonDto) {
    return this.polygonService.create(polyDto);
  }
  @ApiOperation({ summary: 'Получение полигона по Ентити' })
  @ApiResponse({ status: 200, type: [Cottage] })
  @Get('/:entity')
  findByEntity(@Query() { id }) {
    return this.polygonService.findByEntity(Number(id));
  }
}
