import { ApiProperty } from "@nestjs/swagger";

export class AutorDao{

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