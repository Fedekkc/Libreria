import { Controller, Get, Post, Param, Put, Body, Delete, HttpException, HttpStatus } from "@nestjs/common";
import { EditorialDto } from "./editoriales.dto";
import { EditorialesService } from "./editoriales.service";

@Controller('editoriales')
export class EditorialesController {

    constructor(private editorialesService: EditorialesService) {}

    @Get()
    async findAll() {
        try {
            return this.editorialesService.findAll();
        } catch (error) {
            throw new HttpException('Error al obtener todas las editoriales', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        try {
            return this.editorialesService.findOne(id);
        } catch (error) {
            throw new HttpException('Error al obtener la editorial', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post()
    async create(@Body() editorial: EditorialDto) {
        try {
            this.editorialesService.create(editorial);
        } catch (error) {
            throw new HttpException('Error al crear la editorial', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() editorial: EditorialDto) {
        try {
            this.editorialesService.update(id, editorial);
        } catch (error) {
            throw new HttpException('Error al actualizar la editorial', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        try {
            this.editorialesService.delete(id);
        } catch (error) {
            throw new HttpException('Error al eliminar la editorial', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}