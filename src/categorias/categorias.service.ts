import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categorias.entity';

@Injectable()
export class CategoriasService {
    constructor(
        @InjectRepository(Categoria)
        private categoriasRepository: Repository<Categoria>,
    ) {}

    async findAll(): Promise<Categoria[]> {
        return this.categoriasRepository.find();
    }

    async findById(id: number): Promise<Categoria | undefined> {
        return this.categoriasRepository.findOne({ where: { id_categoria: id } });
    }

    async create(categoriaData: Categoria): Promise<Categoria> {
        const categoria = this.categoriasRepository.create(categoriaData);
        return this.categoriasRepository.save(categoria);
    }

    async update(id: number, categoriaData: Categoria): Promise<Categoria | undefined> { 
        const categoria = await this.findById(id);
        if (!categoria) {
            return undefined;
        }
        Object.assign(categoria, categoriaData);
        return this.categoriasRepository.save(categoria);
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.categoriasRepository.delete(id);
        return result.affected > 0;
    }
}