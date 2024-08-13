import { Controller, Get, Post, Param, Put, Body, Delete } from "@nestjs/common";
import { AutorDao } from "./autores.dao";

@Controller('autores')
export class AutoresController {

    autores: AutorDao[] = [];

    @Get()
    getAllAutores(): AutorDao[] {
        return this.autores;
    }

    @Get(':id')
    getAutorById(@Param('id') id: number): AutorDao {
        const autor = this.autores.find(autor => autor.id_autor == id);
        return autor;
    }

    @Post()
    createAutor(@Body() autor: AutorDao): AutorDao {
        const newAutor = { ...autor, id: '' + (this.autores.length)  }
        this.autores = [...this.autores, newAutor];
        return newAutor;
        
    }

    @Put(':id')
    updateAutor(@Param('id') id: number, @Body() autor: AutorDao): AutorDao {
        this.autores = this.autores.filter(autor => autor.id_autor !== id);
        this.autores = [...this.autores, this.createAutor(autor)];
        return autor;
    }

    @Delete(':id')
    deleteAutor(@Param('id') id: number) {
        this.autores = this.autores.filter(autor => autor.id_autor !== id);
    }


}