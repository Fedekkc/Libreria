import { Body, Controller, Get, Post } from "@nestjs/common";
import { categoriasDao } from "./categorias.dao";
import { Categoria } from "./categorias.entity";


@Controller('categorias')
export class categoriasController {

    categorias: categoriasDao[] = [];

    @Get()
    getCategorias(): categoriasDao[] {
        return this.categorias;

    }

    @Post()
    createCategoria(@Body() categoria: categoriasDao ): categoriasDao {
        const newCat = { ...categoria };
        this.categorias = [ ...this.categorias, newCat ];
        return newCat;
    }

    



}
