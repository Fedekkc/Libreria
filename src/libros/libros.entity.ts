import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "src/categorias/categorias.entity";
import { Editorial } from "src/editoriales/editoriales.entity";


@Entity()
export class Libro{
    @PrimaryGeneratedColumn()
    id_libro: number;

    @ManyToOne(() => Editorial, (editorial) => editorial.libros)
    editorial: Editorial;

    @Column()
    titulo: string;

    @Column({type: 'decimal', precision: 10, scale: 2 })
    precio: number;

    @Column({ type: 'date' })
    fecha_lanzamiento: Date;
    @Column()
    descripcion: string;
    @ManyToMany(() =>  Categoria, (categoria) => categoria.libros)
    categoria: Categoria;


}