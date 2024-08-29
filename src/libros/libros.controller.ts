import { Controller, Get, Post, Param, Put, Body, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { LibroDto } from './libros.dto';
import { LibrosService } from './libros.service';

@Controller('libros')
export class LibrosController {
    
    constructor(private readonly librosService: LibrosService) {}

    @Get()
    async findAll() {
        try {
            const libros = await this.librosService.findAll();
            return libros;
        } catch (error) {
            throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        try {
            const libro = await this.librosService.findOne(id);
            return libro;
        } catch (error) {
            if (error instanceof HttpException) {
                throw error;
            }
            throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post()
    async create(@Body() libro: LibroDto) {
        try {
            const nuevoLibro = await this.librosService.create(libro);
            return {
                statusCode: HttpStatus.CREATED,
                message: 'Libro creado',
                data: nuevoLibro,
            };
        } catch (error) {
            if (error instanceof HttpException) {
                throw error;
            }
            throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() libro: LibroDto) {
        try {
            const libroActualizado = await this.librosService.update(id, libro);
            return {
                statusCode: HttpStatus.OK,
                message: 'Libro actualizado exitosamente',
                data: libroActualizado,
            };
        } catch (error) {
            if (error instanceof HttpException) {
                throw error; 
            }
            throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        try {
            await this.librosService.delete(id);
            return {
                statusCode: HttpStatus.NO_CONTENT,
                message: 'Libro eliminado exitosamente',
            };
        } catch (error) {
            if (error instanceof HttpException) {
                throw error; 
            }
            throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
