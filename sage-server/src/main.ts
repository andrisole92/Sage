import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as fs from "fs";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {cors: true});

    const options = new DocumentBuilder()
        .setTitle('Sage Recruitment')
        .setDescription('Simple List API with Nest.js')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    fs.writeFileSync("./swagger-spec.json", JSON.stringify(document));
    SwaggerModule.setup('api', app, document);


    await app.listen(3000);
}

bootstrap();
