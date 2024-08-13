import { Module } from '@nestjs/common';
import { EditorialesController } from './editoriales.controller';

@Module({
    imports: [],
    controllers: [ EditorialesController ],
    providers: []

})
export class EditorialesModule {}
