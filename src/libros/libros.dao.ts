import { ApiProperty } from "@nestjs/swagger";
import { Editorial } from "src/editoriales/editoriales.entity";

export class LibroDao{

    @ApiProperty()
    readonly id_libro?: number;

    @ApiProperty()
    readonly editorial: Editorial;

    @ApiProperty()
    readonly apellido_autor: string;

    @ApiProperty()
    readonly dni_autor: string;

    @ApiProperty()
    readonly nacionalidad_autor: string;

}