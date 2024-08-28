import { Injectable } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Libro } from "src/libros/libros.entity";

@Injectable()
export class CategoriasDto{
    @ApiProperty()
    readonly id_categoria?: number;

    @ApiProperty()
    readonly nombre_categoria: string;

}