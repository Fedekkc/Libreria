import { Body, Controller, Get, Post } from "@nestjs/common";
import { CategoriasDto } from "./categorias.dto";
import { Categoria } from "./categorias.entity";
import { CategoriasService } from "./categorias.service";

@Controller('categorias')
export class CategoriasController {
        
        constructor(private categoriasService: CategoriasService) {}
    
        @Get()
        async findAll() : Promise<Categoria[]> | null {
            return this.categoriasService.findAll();
        }
    
        @Post()
        async create(@Body() categoria: CategoriasDto){
            
            this.categoriasService.create(categoria);
        }



}
