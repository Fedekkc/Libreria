import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosModule } from './libros/libros.module';
import { AutoresModule } from './autores/autores.module';
import { EditorialesModule } from './editoriales/editoriales.module';
import { CategoriasModule } from './categorias/categorias.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from './autores/autores.entity';
import { DatabaseModule } from './db/database.module';

@Module({
  imports: [LibrosModule, AutoresModule, EditorialesModule, CategoriasModule, DatabaseModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// Las operaciones se hacen a través de los servicios

// En los controladores se definen las rutas
