import { Module } from '@nestjs/common';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categorias.entity';



@Module({

    imports: [ TypeOrmModule.forFeature([Categoria]) ],
    exports: [ TypeOrmModule ],
    controllers: [ CategoriasController ],
    providers: [ CategoriasService ]
})
export class CategoriasModule { 

}


