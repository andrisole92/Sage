import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, BaseEntity } from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";


export abstract class Base extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    id: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    @ApiProperty()
    createDateTime: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lastChangedDateTime: Date;

}
