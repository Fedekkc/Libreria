import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './libros.entity';

@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro)
    private librosRepository: Repository<Libro>,
  ) {}

  create(libro: Libro) {
    return this.librosRepository.save(libro);
  }

  findAll() {
    return this.librosRepository.find({ relations: ['autores', 'editorial'] });
  }

  findOne(id: number) {
      return this.librosRepository.findOne({
        where: { id_libro: id },
        relations: ['autores', 'editorial'],
      });
    }

  update(id: number, libro: Libro) {
    return this.librosRepository.update(id, libro);
  }

  delete(id: number) {
    return this.librosRepository.delete(id);
  }

  isValidAutor()

  isValidEditorial

}
