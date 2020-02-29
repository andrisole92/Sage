import { Module } from '@nestjs/common';
import { ListController } from './list.controller';
import { ListService } from './list.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ListEntity} from "../model/list.entity";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [TypeOrmModule.forFeature([ListEntity]),ConfigModule],
  controllers: [ListController],
  providers: [ListService],
  exports: [ListService]
})
export class ListModule {}
