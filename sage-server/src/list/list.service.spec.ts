import {Test, TestingModule} from '@nestjs/testing';
import {ListService} from './list.service';
import {DatabaseModule} from "../database/database.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ListEntity} from "../model/list.entity";
import {DeleteResult} from "typeorm";
import {ListItemEntity} from "../model/listItem.entity";
import {AddItemDTO} from "../dto/req/addItem.dto";

describe('ListService', () => {
    let service: ListService;

    const genericList: ListEntity = new ListEntity();
    const genericItem: ListItemEntity = new ListItemEntity();

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [DatabaseModule, TypeOrmModule.forFeature([ListEntity])],

            providers: [ListService],
        }).compile();

        service = module.get<ListService>(ListService);
        await genericList.save();
        genericItem.title = "GenericItem";
        genericItem.list = genericList;
        await genericItem.save();
    });

    it('should be defined', async () => {
        expect(service).toBeDefined();
    });

    it('should find a single list with tasks', async () => {
        try {
            const foundList: ListEntity = await service.findOne(genericList.id);
            expect(foundList).not.toBeNull();
            expect(foundList.id).toBe(genericList.id);

        } catch (e) {
            throw(e);
        }
    });

    it('should create list entity', async () => {
        try {
            const list = await service.create();
            expect(list).not.toBeNull();
            expect(list).toHaveProperty('id');
            expect(typeof list['id']).toBe('string');
            await ListEntity.delete(list.id);
        } catch (e) {
            throw(e);
        }

    });

    it('should fetch all list entities', async () => {
        try {
            const allLists = await service.findAll();
            expect(allLists).not.toBeNull();
            expect(allLists.length).toBeGreaterThan(0);
            console.log(allLists);
        } catch (e) {
            throw(e);
        }
    });

    it('should add list item', async () => {
        try {

            // mocking a DTO
            const dto: AddItemDTO = new AddItemDTO();
            dto.listId = genericList.id;
            dto.title = "AddListItem";

            // Using service to add item
            const newItem: ListItemEntity = await service.addItem(dto);

            // Makinng multiple assertions
            expect(newItem).not.toBeNull();
            expect(newItem.list).not.toBeNull();
            expect(typeof newItem.list.id).toBe('string');
            expect(newItem.list.id).toBe(genericList.id);
        } catch (e) {
            throw(e);
        }
    });

    it('should remove list item', async () => {
        try {
            const res: DeleteResult = await service.removeItem({itemId: genericItem.id});
            expect(res).not.toBeNull();
            expect(res.affected).toBe(1);
        } catch (e) {
            throw(e);
        }
    });
});
