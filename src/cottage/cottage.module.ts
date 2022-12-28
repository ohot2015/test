import { Module } from '@nestjs/common';
import { CottageService } from './cottage.service';
import { CottageController } from './cottage.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cottage } from './entities/cottage.entity';
import { VillageModule } from '../village/village.module';

@Module({
  controllers: [CottageController],
  providers: [CottageService],
  imports: [SequelizeModule.forFeature([Cottage]), VillageModule],
})
export class CottageModule {}
