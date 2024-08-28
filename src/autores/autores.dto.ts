import { Inject, Injectable } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Libro } from "src/libros/libros.entity";

export class AutorDto{

    @ApiProperty()
    readonly id_autor?: number;

    @ApiProperty()
    readonly nombre_autor: string;

    @ApiProperty()
    readonly apellido_autor: string;

    @ApiProperty()
    readonly dni_autor: string;

    @ApiProperty()
    readonly nacionalidad_autor: string;


}