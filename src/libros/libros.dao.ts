import { ApiProperty } from "@nestjs/swagger";
import { OneToMany } from "typeorm";

export class LibroDao{

    @ApiProperty()
    readonly id_libro?: number;

    @OneToMany()
    readonly editorial: string;

    @ApiProperty()
    readonly apellido_autor: string;

    @ApiProperty()
    readonly dni_autor: string;

    @ApiProperty()
    readonly nacionalidad_autor: string;

}