import { Module } from '@nestjs/common';
import { Libro } from './libros.entity';
import { LibrosController } from './libros.controller';
import LibrosService from './libros.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from 'src/autores/autores.entity';
import { Categoria } from 'src/categorias/categorias.entity';
import { Editorial } from 'src/editoriales/editoriales.entity';

@Module({
    controllers: [ LibrosController ],
    providers: [LibrosService],
    imports: [
        TypeOrmModule.forFeature([Libro, Autor, Categoria, Editorial ])
    ],
    exports: [TypeOrmModule]

})
export class LibrosModule {}
