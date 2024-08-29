import { Body, Controller, Get, Post, HttpException, HttpStatus } from "@nestjs/common";
import { CategoriasDto } from "./categorias.dto";
import { Categoria } from "./categorias.entity";
import { CategoriasService } from "./categorias.service";

@Controller('categorias')
export class CategoriasController {
        
    constructor(private categoriasService: CategoriasService) {}

    @Get()
    async findAll(): Promise<Categoria[]> | null {
        try {
            return await this.categoriasService.findAll();
        } catch (error) {
            throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post()
    async create(@Body() categoria: CategoriasDto) {
        try {
            this.categoriasService.create(categoria);
        } catch (error) {
            throw new HttpException('Consulta mal hecha', HttpStatus.BAD_REQUEST);
        }
    }
}
