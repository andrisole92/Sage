import {Entity, OneToMany} from 'typeorm';
import {Base} from "./base.entity";
import {ApiProperty} from "@nestjs/swagger";
import {ListItemEntity} from "./listItem.entity";

@Entity({name: 'list'})
export class ListEntity extends Base {

    @OneToMany(() => ListItemEntity, item => item.list, {eager: true}) // note: we will create author property in the Photo class below
    @ApiProperty({type: [ListItemEntity]})

    items: ListItemEntity[];
}
