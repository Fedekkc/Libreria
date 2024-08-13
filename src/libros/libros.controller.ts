import { Controller, Get, Post, Param, Put, Body, Delete } from "@nestjs/common";
import { LibroDao } from "./libros.dao";

@Controller('libros')
export class LibrosController {

    libros: LibroDao[] = [];

    @Get()
    getAllLibros(): LibroDao[] {
        return this.libros;
    }

    @Get(':id')
    getLibroById(@Param('id') id: number): LibroDao {
        const libro = this.libros.find(libro => libro.id_libro == id);
        return libro;
    }

    @Post()
    createLibro(@Body() libro: LibroDao): LibroDao {
        const newlibro = { ...libro, id: '' + (this.libros.length)  }
        this.libros = [...this.libros, newlibro];
        return newlibro;
        
    }

    @Put(':id')
    updateLibro(@Param('id') id: number, @Body() libro: LibroDao): LibroDao {
        this.libros = this.libros.filter(libro => libro.id_libro !== id);
        this.libros = [...this.libros, this.createLibro(libro)];
        return libro;
    }

    @Delete(':id')
    deleteLibro(@Param('id') id: number) {
        this.libros = this.libros.filter(libro => libro.id_libro !== id);
    }


}


