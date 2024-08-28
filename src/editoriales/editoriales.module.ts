import { Module } from '@nestjs/common';
import { EditorialesController } from './editoriales.controller';
import { EditorialesService } from './editoriales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Editorial } from './editoriales.entity';

@Module({
    imports: [ TypeOrmModule.forFeature([Editorial]) ],
    controllers: [ EditorialesController ],
    providers: [
        EditorialesService
    ]

})
export class EditorialesModule {}
