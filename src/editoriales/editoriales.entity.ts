import { Libro } from "src/libros/libros.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, } from "typeorm";


@Entity()
export class Editorial{
    @PrimaryGeneratedColumn()
    id_editorial: number;

    @Column()
    nombre_editorial: string;

    @Column()
    direccion_editorial: string;

    @Column()
    cuit_editorial: string;

    @ManyToOne( () => Libro, (libro) => Libro.editorial)
    libros: Libro[];


} 