import { Module } from '@nestjs/common';
import { Libro } from './libros.entity';

@Module({
    controllers: [ LibrosController ],
    providers: [],
    imports: []

})
export class LibrosModule {}
