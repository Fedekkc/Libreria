import { Column, Entity, PrimaryGeneratedColumn, } from "typeorm";

@Entity()
export class Autor{
    @PrimaryGeneratedColumn()
    id_autor: number;

    @Column()
    nombre_autor: string;

    @Column()
    apellido_autor: string;

    @Column()
    dni_autor: string;

    @Column()
    nacionalidad_autor: string;

}