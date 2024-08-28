import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './libros.entity';
import { Autor } from '../autores/autores.entity';
import { Categoria } from '../categorias/categorias.entity';
import { Editorial } from '../editoriales/editoriales.entity';
import { LibroDto } from './libros.dto';

@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro)
    private librosRepository: Repository<Libro>,
    @InjectRepository(Autor)
    private autoresRepository: Repository<Autor>,
    @InjectRepository(Categoria)
    private categoriasRepository: Repository<Categoria>,
    @InjectRepository(Editorial)
    private editorialesRepository: Repository<Editorial>,
  ) {}

  private formatStringToISODate(date: string): string {
    const [day, month, year] = date.split('/').map(Number);
    const fullYear = year < 100 ? (year >= 50 ? `19${year}` : `20${year}`) : `${year}`;
    return `${fullYear}-${month}-${day}`;
  }

  async create(libroDto: LibroDto): Promise<Libro> {
    const libro = new Libro();
    libro.titulo = libroDto.titulo_libro;
    libro.precio = libroDto.precio_libro;
    libro.fecha_lanzamiento = this.formatStringToISODate(libroDto.fecha_lanzamiento.toString());
    libro.descripcion = libroDto.descripcion_libro;
    libro.categoria = [];
    libro.autores = [];

    const editorial = await this.editorialesRepository.findOne({ where: { id_editorial: libroDto.id_editorial } });
    if (!editorial) {
      throw new NotFoundException(`Editorial con id ${libroDto.id_editorial} no encontrada`);
    }
    libro.editorial = editorial;

    for (const idAutor of libroDto.autores) {
      const autor = await this.autoresRepository.findOne({ where: { id_autor: idAutor } });
      if (!autor) {
        throw new NotFoundException(`Autor con id ${idAutor} no encontrado`);
      }
      libro.autores.push(autor);
    }

    for (const idCategoria of libroDto.id_categorias) {
      const categoria = await this.categoriasRepository.findOne({ where: { id_categoria: idCategoria } });
      if (!categoria) {
        throw new NotFoundException(`Categoria con id ${idCategoria} no encontrada`);
      }
      libro.categoria.push(categoria);
    }

    return this.librosRepository.save(libro);
  }

  async findAll() {
    return this.librosRepository.find({ relations: ['autores', 'editorial'] });
  }

  async findOne(id: number): Promise<Libro> {
    const libro = await this.librosRepository.findOne({ where: { id_libro: id }, relations: ['autores', 'editorial'] });
    if (!libro) {
      throw new NotFoundException(`Libro con id ${id} no encontrado`);
    }
    return libro;
  }

  async update(id: number, libroDto: LibroDto): Promise<Libro> {
    const libro = await this.findOne(id);

    libro.titulo = libroDto.titulo_libro;
    libro.precio = libroDto.precio_libro;
    libro.fecha_lanzamiento = this.formatStringToISODate(libroDto.fecha_lanzamiento.toString());
    libro.descripcion = libroDto.descripcion_libro;

    const editorial = await this.editorialesRepository.findOne({ where: { id_editorial: libroDto.id_editorial } });
    if (!editorial) {
      throw new NotFoundException(`Editorial con id ${libroDto.id_editorial} no encontrada`);
    }
    libro.editorial = editorial;

    libro.autores = [];
    for (const idAutor of libroDto.autores) {
      const autor = await this.autoresRepository.findOne({ where: { id_autor: idAutor } });
      if (!autor) {
        throw new NotFoundException(`Autor con id ${idAutor} no encontrado`);
      }
      libro.autores.push(autor);
    }

    libro.categoria = [];
    for (const idCategoria of libroDto.id_categorias) {
      const categoria = await this.categoriasRepository.findOne({ where: { id_categoria: idCategoria } });
      if (!categoria) {
        throw new NotFoundException(`Categoria con id ${idCategoria} no encontrada`);
      }
      libro.categoria.push(categoria);
    }

    return this.librosRepository.save(libro);
  }

  async delete(id: number): Promise<void> {
    const result = await this.librosRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Libro con id ${id} no encontrado`);
    }
  }

}
export default LibrosService;
