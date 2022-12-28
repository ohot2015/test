import { Module } from '@nestjs/common';
import { VillageService } from './village.service';
import { VillageController } from './village.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Village } from './entities/village.entity';

@Module({
  controllers: [VillageController],
  providers: [VillageService],
  imports: [SequelizeModule.forFeature([Village])],
  exports: [VillageService],
})
export class VillageModule {}
