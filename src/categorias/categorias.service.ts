import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categorias.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class CategoriasService {
    constructor(
        @InjectRepository(Categoria)
        private categoriasRepository: Repository<Categoria>,
    ) {}

    async findAll(): Promise<Categoria[]> {
        return this.categoriasRepository.find();
    }

    async findById(id: number): Promise<Categoria> {
        const categoria = await this.categoriasRepository.findOne({ where: { id_categoria: id } });
        if (!categoria) {
            throw new NotFoundException('Categoria no encontrada.');
        }
        return categoria;
    }

    async create(categoriaData: Categoria): Promise<Categoria> {
        const categoria = this.categoriasRepository.create(categoriaData);
        return this.categoriasRepository.save(categoria);
    }

    async update(id: number, categoriaData: Categoria): Promise<Categoria> { 
        const categoria = await this.findById(id);
        Object.assign(categoria, categoriaData);
        return this.categoriasRepository.save(categoria);
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.categoriasRepository.delete(id);
        if (result.affected === 0) {
            throw new HttpException('Categoria no encontrada.', HttpStatus.NOT_FOUND);
        }
        return true;
    }
}
