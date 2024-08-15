import { Module } from '@nestjs/common';
import { Libro } from './libros.entity';
import { LibrosController } from './libros.controller';

@Module({
    controllers: [ LibrosController ],
    providers: [],
    imports: []

})
export class LibrosModule {}
