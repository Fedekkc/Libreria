import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, } from "typeorm";
import { Libro } from "src/libros/libros.entity";

@Entity({ name: 'categorias' })
export class Categoria{

    @PrimaryGeneratedColumn()
    id_categoria?: number;

    @Column()
    nombre_categoria: string;

    @ManyToMany(() => Libro, (libro) => libro.categoria)
    libros?: Libro[];

}