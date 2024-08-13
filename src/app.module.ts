import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosModule } from './libros/libros.controller';
import { AutoresModule } from './autores/autores.module';
import { EditorialesModule } from './editoriales/editoriales.module';

@Module({
  imports: [LibrosModule, AutoresModule, EditorialesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// Las operaciones se hacen a través de los servicios

// En los controladores se definen las rutas
