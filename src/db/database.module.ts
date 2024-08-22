import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Libro } from 'src/libros/libros.entity';
import { Autor } from 'src/autores/autores.entity';
import { Connection } from 'typeorm';
import { Categoria } from 'src/categorias/categorias.entity';
import { Editorial } from 'src/editoriales/editoriales.entity';
import  ormConfig  from './orm.config';


@Module( 
    {
    imports:
        [
            TypeOrmModule.forRoot(ormConfig)

        ]
    }
)
export class DatabaseModule {
    constructor( private readonly connection:Connection) {
        console.log(ormConfig);
    }

    
}