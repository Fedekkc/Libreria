import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosModule } from './libros/libros.module';
import { AutoresModule } from './autores/autores.module';
import { EditorialesModule } from './editoriales/editoriales.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [LibrosModule, AutoresModule, EditorialesModule, CategoriasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
