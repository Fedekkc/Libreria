import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "src/app.module";
import { AutoresModule } from "./autores.module";




describe('AutoresController (e2e)', () => {

    let app: INestApplication;

    beforeEach(async()  => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule, AutoresModule]
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
      });

       


});