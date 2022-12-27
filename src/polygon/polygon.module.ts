import { Module } from '@nestjs/common';
import { PolygonService } from './polygon.service';
import { PolygonController } from './polygon.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Polygon } from './entities/polygon.entity';

@Module({
  controllers: [PolygonController],
  providers: [PolygonService],
  imports: [SequelizeModule.forFeature([Polygon])],
})
export class PolygonModule {}
