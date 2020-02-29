import {Injectable} from '@nestjs/common';
import {getConnection} from "typeorm";

import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository} from "typeorm";
import {ListEntity} from "../model/list.entity";
import {AddItemDTO} from "../dto/req/addItem.dto";
import {RemoveItemDTO} from "../dto/req/removeItem.dto";
import {ListItemEntity} from "../model/listItem.entity";

@Injectable()
export class ListService {

    constructor(@InjectRepository(ListEntity) private readonly listRepository: Repository<ListEntity>) {
    }

    async findOne(id: string): Promise<ListEntity> {
        return await this.listRepository.findOne(id);
    }

    async findAll(): Promise<ListEntity[]> {
        return await this.listRepository.find();
    }

    async create(): Promise<ListEntity> {
        return await new ListEntity().save();
    }


    async addItem(dto: AddItemDTO): Promise<ListItemEntity> {
        try {

            // get
            // let conn = await getConnection();
            // let q = conn.createQueryBuilder()
            //     .select("MAX(item.order)", "max")
            //     .from(ListItemEntity, 'item')
            //     .where('item."listId" = :id', {id: dto.listId});
            // let res = await q.getRawOne();

            // console.log(res.max);

            const item: ListItemEntity = new ListItemEntity();
            item.title = dto.title;
            item.list = await ListEntity.findOne({id: dto.listId});
            // item.order = res.max + 1;
            console.log(item);
            return await item.save();
        } catch (e) {
            throw(e);
        }
    }

    async removeItem(removeItemDTO: RemoveItemDTO): Promise<DeleteResult> {
        try {
            return await ListItemEntity.delete(removeItemDTO.itemId);
        } catch (e) {
            throw(e);
        }
    }

    async clear(id: string): Promise<any> {
        console.log(id);
        try {

            const res = await getConnection()
                .createQueryBuilder()
                .delete()
                .from(ListItemEntity)
                .where('item."listId" = :id', {id})
                .execute();
            console.log(res);
            return res;
        } catch (e) {
            throw(e);
        }
    }

    async reorder(id: string): Promise<any> {
        try {

            const res = await getConnection()
                .createQueryBuilder()
                .delete()
                .from(ListItemEntity)
                .where('item."listId" = :id', {id})
                .execute();
            console.log(res);
            return res;
        } catch (e) {
            throw(e);
        }
    }
}
