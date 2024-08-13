import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Libro } from 'src/libros/libros.entity';
import { Autor } from 'src/autores/autores.entity';
import { Connection } from 'typeorm';
import { Categoria } from 'src/categorias/categorias.entity';
import { Editorial } from 'src/editoriales/editoriales.entity';

@Module( 
    {
    imports:
        [
            TypeOrmModule.forRoot
            (
                {
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'libreria',
                entities:[
                    Autor,
                    Libro,
                    Categoria,
                    Editorial

                ],
                synchronize:true
                }
            )
        ]
    }
)
export class DatabaseModule {
    constructor( private readonly connection:Connection) {
        
    }

    
}