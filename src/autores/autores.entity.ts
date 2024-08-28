import { Libro } from "src/libros/libros.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, } from "typeorm";

@Entity({ name: 'autores' })
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

    @ManyToMany(() => Libro, (libro) => libro.autores)
    libros: Libro[];
    

}