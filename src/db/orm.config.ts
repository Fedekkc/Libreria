import { DataSourceOptions } from 'typeorm';
import { Autor } from '../autores/autores.entity';
import { Libro } from '../libros/libros.entity';
import { Categoria } from '../categorias/categorias.entity';
import { Editorial } from '../editoriales/editoriales.entity';


const ormConfig: DataSourceOptions = {
    host: '10.16.17.152',
    port: 1521,
    username: 'C##TEST',
    password: 'test',
    database: 'test',
    sid: 'xe',
    type: 'oracle',
    logging: ['error'],
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true
    
};

export default ormConfig;
