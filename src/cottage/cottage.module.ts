import { Module } from '@nestjs/common';
import { CottageService } from './cottage.service';
import { CottageController } from './cottage.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cottage } from './entities/cattage.entity';

@Module({
  controllers: [CottageController],
  providers: [CottageService],
  imports: [SequelizeModule.forFeature([Cottage])],
})
export class CottageModule {}
