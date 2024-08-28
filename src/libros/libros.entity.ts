import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "src/categorias/categorias.entity";
import { Editorial } from "src/editoriales/editoriales.entity";
import { Autor } from "src/autores/autores.entity";


@Entity({ name: 'libros' })
export class Libro{
    @PrimaryGeneratedColumn()
    id_libro: number;

    
    @ManyToOne(() => Editorial, (editorial) => editorial.libros)
    editorial: Editorial; 

    @Column()
    titulo: string;

    @ManyToMany(() => Autor, (autor) => autor.libros)
    @JoinTable(
        {
            name: 'libro_autor',
            joinColumn: { name: 'id_libro', referencedColumnName: 'id_libro' },
            inverseJoinColumn: { name: 'id_autor', referencedColumnName: 'id_autor' }
        }

    )
    autores: Autor[];




    @Column({type: 'decimal', precision: 10, scale: 2 })
    precio: number;

    @Column({ type: 'date' })
    fecha_lanzamiento: string;
    @Column()
    descripcion: string;
    @ManyToMany(() =>  Categoria, (categoria) => categoria.libros)
    @JoinTable(
        {
            name: 'libro_categoria',
            joinColumn: { name: 'id_libro', referencedColumnName: 'id_libro' },
            inverseJoinColumn: { name: 'id_categoria', referencedColumnName: 'id_categoria' }
        }
    )
    categoria: Categoria[];




    




    


}