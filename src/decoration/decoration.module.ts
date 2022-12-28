import { Module } from '@nestjs/common';
import { DecorationService } from './decoration.service';
import { DecorationController } from './decoration.controller';

@Module({
  controllers: [DecorationController],
  providers: [DecorationService]
})
export class DecorationModule {}
