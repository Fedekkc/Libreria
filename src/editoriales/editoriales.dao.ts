import { ApiProperty } from "@nestjs/swagger";

export class EditorialDao{

    @ApiProperty()
    readonly id_editorial?: number;


    @ApiProperty()
    readonly nombre_editorial: string;

    @ApiProperty()
    readonly direccion_editorial: string;

    @ApiProperty()
    readonly cuit_editorial: string;

}