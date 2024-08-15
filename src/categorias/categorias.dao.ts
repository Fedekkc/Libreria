import { ApiProperty } from "@nestjs/swagger";


export class categoriasDao{
    @ApiProperty()
    readonly id?: number;

    @ApiProperty()
    readonly nombre_categoria: string;

}