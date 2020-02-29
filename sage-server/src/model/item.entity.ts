// import {Entity, Column, ManyToOne} from 'typeorm';
// import {Base} from "./base.entity";
// import {ListEntity} from "./list.entity";
// import {ApiProperty} from "@nestjs/swagger";
//
// @Entity({name: 'item'})
// export class ItemEntity extends Base {
//
//     @Column({type: 'varchar', length: 300, nullable: false})
//     @ApiProperty()
//     title!: string;
//
//
//     @ManyToOne(() => ListEntity, list => list.items, {nullable: false})
//     @ApiProperty({
//         type: String,
//         name: 'listId'
//     })
//     list: ListEntity;
//
// }
