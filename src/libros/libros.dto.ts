import { ApiProperty } from "@nestjs/swagger";
import { Categoria } from "src/categorias/categorias.entity";
import { Editorial } from "src/editoriales/editoriales.entity";
import { Autor } from "src/autores/autores.entity";

export class LibroDto{

    @ApiProperty()
    readonly id_libro?: number;

    @ApiProperty()
    readonly titulo_libro: string;

    @ApiProperty()
    readonly descripcion_libro: string;

    @ApiProperty()
    readonly precio_libro: number;
    
    @ApiProperty()
    readonly id_editorial: number;

    @ApiProperty()
    readonly fecha_lanzamiento: Date; 

    @ApiProperty()
    readonly id_categorias: number[];

    @ApiProperty()
    readonly autores: number[];




}
/*
Libro:
- Autor (puede tener más de uno)
- Editorial (tiene una sola)
- Titulo
- Categoría literaria
- Precio
- fecha lanzamiento
- Descripción
*/