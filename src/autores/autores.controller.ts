import { Controller, Get, Post, Param, Put, Body, Delete, HttpException, HttpStatus } from "@nestjs/common";
import { AutorDto } from "./autores.dto";
import { AutoresService } from "./autores.service";
import { Autor } from "./autores.entity";

@Controller('autores')
export class AutoresController {
    
    constructor(private autoresService: AutoresService) {}

    @Get()
    async findAll() : Promise<Autor[]> {
        try {
            return await this.autoresService.findAll();
        } catch (error) {
            throw new HttpException('Error al obtener los autores', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: number) : Promise<Autor> {
        try {
            const autor = await this.autoresService.findOne(id);
            if (!autor) {
                throw new HttpException('Autor no encontrado', HttpStatus.NOT_FOUND);
            }
            return autor;
        } catch (error) {
            throw new HttpException('Error al obtener el autor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post()
    async create(@Body() autor: AutorDto) {
        try {
            this.autoresService.create(autor);
        } catch (error) {
            throw new HttpException('Error al crear el autor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() autor: AutorDto) : Promise<void> {
        try {
            const updatedAutor = await this.autoresService.update(id, autor);
            if (!updatedAutor) {
                throw new HttpException('Autor no encontrado', HttpStatus.NOT_FOUND);
            }
        } catch (error) {
            throw new HttpException('Error al actualizar el autor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: number) : Promise<void> {
        try {
            const deletedAutor = await this.autoresService.delete(id);
            if (!deletedAutor) {
                throw new HttpException('Autor no encontrado', HttpStatus.NOT_FOUND);
            }
        } catch (error) {
            throw new HttpException('Error al eliminar el autor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}