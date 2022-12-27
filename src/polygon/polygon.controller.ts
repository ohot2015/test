import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { PolygonService } from './polygon.service';
import { CreatePolygonDto } from './dto/create-polygon.dto';

@Controller('polygon')
export class PolygonController {
  constructor(private readonly polygonService: PolygonService) {}

  @Post()
  create(@Body() polyDto: CreatePolygonDto) {
    return this.polygonService.create(polyDto);
  }

  @Get('/:entity')
  findByEntity(@Query() { id }) {
    return this.polygonService.findByEntity(Number(id));
  }
}
