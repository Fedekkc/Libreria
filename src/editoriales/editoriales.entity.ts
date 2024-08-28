import { Libro } from "src/libros/libros.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, } from "typeorm";


@Entity({ name: 'editoriales' })
export class Editorial{
    @PrimaryGeneratedColumn()
    id_editorial: number;

    @Column()
    nombre_editorial: string;

    @Column()
    direccion_editorial: string;

    @Column()
    cuit_editorial: string;

    @OneToMany( () => Libro, (libro) => libro.editorial) 
    libros: Libro[];


} 