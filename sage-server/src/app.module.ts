import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DatabaseModule} from './database/database.module';
import {ListModule} from './list/list.module';
import {ListController} from "./list/list.controller";
import {ConfigModule} from '@nestjs/config';
import configuration from "./config/configuration";
// console.log(process.env);

@Module({
    imports: [ConfigModule.forRoot({
        load: [configuration],
    }), DatabaseModule, ListModule],
    controllers: [AppController, ListController],
    providers: [AppService],
})
export class AppModule {
}
