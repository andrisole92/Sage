import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ListEntity} from "../model/list.entity";
import {ListItemEntity} from "../model/listItem.entity";
import {ConfigModule, ConfigService} from "@nestjs/config";

console.log(process.env['POSTGRES_USERNAME']);

@Module({
    imports: [
        ConfigModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                type: 'postgres' as 'postgres',
                host: process.env.POSTGRES_HOST,
                port: parseInt(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USERNAME,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DATABASE,
                keepConnectionAlive: true,
                entities: [
                    ListItemEntity, ListEntity
                ],
                synchronize: true,
            }),
            inject: [ConfigService]
        })
    ]
})
export class DatabaseModule {
}

// {
//     type: 'postgres',
//
//         // host: 'localhost',
//         // port: 5432,
//         // username: 'postgres',
//         // password: '',
//         // database: 'sage',
//         host: process.env.POSTGRES_HOST,
//     port: parseInt(process.env.POSTGRES_PORT),
//     username: process.env.POSTGRES_USERNAME,
//     password: process.env.POSTGRES_PASSWORD,
//     database: process.env.POSTGRES_DATABASE,
//     keepConnectionAlive: true,
//     entities: [
//     ListItemEntity, ListEntity
// ],
//     synchronize: true,
//     // logging: true
//
// }
