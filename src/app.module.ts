import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import * as process from 'process';
import { User } from './users/users.model';
import { PolygonModule } from './polygon/polygon.module';
import { CottageModule } from './cottage/cottage.module';
import { VillageModule } from './village/village.module';
import { DecorationModule } from './decoration/decoration.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env` }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        dialect: 'mysql',
        host: process.env.MYSQL_HOST,
        port: +process.env.MYSQL_PORT,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        autoLoadModels: true,
        synchronize: true,
        sync: { force: false, alter: true },
      }),
    }),
    UsersModule,
    PolygonModule,
    CottageModule,
    VillageModule,
    DecorationModule,
    ProjectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
