import { Controller, Get, Post, Param, Put, Body, Delete, HttpException, HttpStatus } from "@nestjs/common";
import { LibroDto } from "./libros.dto";
import { LibrosService } from "./libros.service";

@Controller('libros')
export class LibrosController {
    
    constructor(private librosService: LibrosService) {}

    @Get()
    async findAll() {
        try {
            return this.librosService.findAll();
        } catch (error) {
            throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        try {
            return this.librosService.findOne(id);
        } catch (error) {
            throw new HttpException('ID No encontrada', HttpStatus.NOT_FOUND);
        }
    }

    @Post()
    async create(@Body() libro: LibroDto){
        try {
            this.librosService.create(libro);
        } catch (error) {
            throw new HttpException('Consulta mal hecha', HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() libro: LibroDto) {
        try {
            this.librosService.update(id, libro);
        } catch (error) {
        throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        try {
            this.librosService.delete(id);
        } catch (error) {
            throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
