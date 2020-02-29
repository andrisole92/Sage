import {Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Query} from '@nestjs/common';
import {ListService} from "./list.service";
import {ListEntity} from "../model/list.entity";
import {ApiCreatedResponse, ApiResponse, ApiTags} from "@nestjs/swagger";
import {AddItemDTO} from "../dto/req/addItem.dto";
import {RemoveItemDTO} from "../dto/req/removeItem.dto";
import {ClearListDTO} from "../dto/req/clearList.dto";
import {ReorderListDTO} from "../dto/req/reorderList.dto";
import {ListItemEntity} from "../model/listItem.entity";
import {DeleteResult} from "typeorm";
import {ConfigService} from "@nestjs/config";

@ApiTags('List')
@Controller('list')
export class ListController {
    constructor(private readonly listService: ListService, private readonly configService: ConfigService) {
        console.log('here:', this.configService.get<string>('POSTGRES_USERNAME'));
        console.log('here:', process.env['POSTGRES_USERNAME']);
    }

    @Get()
    @ApiResponse({
        description: 'All Lists.',
        type: [ListEntity],
    })
    async findAll(): Promise<ListEntity[]> {
        let res;
        try {
            res = await this.listService.findAll();
            return res;
        } catch (e) {
            console.log(e);
            return e;
        }
    }


    @Get(':id')
    @HttpCode(200)
    @ApiResponse({
        status: 200,
        description: 'Single list.',
        type: ListEntity,
    })
    async findOne(@Param('id') id: string): Promise<ListEntity> {
        let res;
        try {
            res = await this.listService.findOne(id);
            return res;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error,
            }, 500);
        }
    }

    @Post()
    @ApiCreatedResponse({
        description: 'Created List.',
        type: ListEntity,
    })
    async post(): Promise<ListEntity[]> {
        let res;
        try {
            res = await this.listService.create();
            res.items = [];
            return res;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error,
            }, 500);
        }
    }

    @Post('addItem')
    @ApiCreatedResponse({
        description: 'Created Item.',
        type: ListItemEntity,
    })
    @HttpCode(200)
    async addItem(@Body() dto: AddItemDTO): Promise<ListEntity[]> {
        console.log('addItem');
        let res;
        try {
            res = await this.listService.addItem(dto);
            console.log(res);
            return res;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error,
            }, 500);
        }
    }

    @Delete('removeItem')
    @HttpCode(200)
    @ApiResponse({
        description: 'Boolean success',
        type: Boolean,
    })
    async removeItem(@Body() dto: RemoveItemDTO): Promise<boolean> {
        let res: DeleteResult;
        try {
            res = await this.listService.removeItem({itemId: dto.itemId});
            return res.affected > 0;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error,
            }, 500);
        }
    }

    @Delete('clear')
    @ApiResponse({
        status: 200,
        description: 'Boolean success',
        type: Boolean,
    })
    async clear(@Body() dto: ClearListDTO): Promise<ListEntity[]> {
        let res;
        try {
            res = await this.listService.clear(dto.listId);
            console.log(res);
            return res;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error,
            }, 500);
        }
    }

    @Post('reorder')
    @ApiResponse({
        status: 200,
        description: 'Reordered List',
        type: ListEntity,
    })
    async reorder(@Body() reorderListDTO: ReorderListDTO): Promise<ListEntity[]> {
        let res;
        try {
            res = await this.listService.findAll();
            return res;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error,
            }, 500);
        }
    }
}
