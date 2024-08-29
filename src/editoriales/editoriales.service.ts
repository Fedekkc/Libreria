import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Editorial } from './editoriales.entity';

@Injectable()
export class EditorialesService {
    constructor(
        @InjectRepository(Editorial)
        private readonly editorialRepository: Repository<Editorial>,
    ) {}

    async findAll(): Promise<Editorial[]> {
        try {
            return this.editorialRepository.find();
        } catch (error) {
            throw new Error('No se pudieron obtener las editoriales.');
        }
    }

    async findOne(id: number): Promise<Editorial> {
        try {
            const editorial = await this.editorialRepository.findOne({ where: { id_editorial: id } });
            if (!editorial) {
                throw new NotFoundException('Editorial no encontrada.');
            }
            return editorial;
        } catch (error) {
            throw new Error('No se pudo encontrar la editorial.');
        }
    }

    async create(editorialData: Partial<Editorial>): Promise<Editorial> {
        try {
            const editorial = this.editorialRepository.create(editorialData);
            return this.editorialRepository.save(editorial);
        } catch (error) {
            throw new Error('No se pudo crear la editorial.');
        }
    }

    async update(id: number, editorialData: Partial<Editorial>): Promise<Editorial> {
        try {
            await this.editorialRepository.update(id, editorialData);
            const updatedEditorial = await this.editorialRepository.findOne({ where: { id_editorial: id } });
            if (!updatedEditorial) {
                throw new NotFoundException('Editorial no encontrada.');
            }
            return updatedEditorial;
        } catch (error) {
            throw new Error('No se pudo actualizar la editorial.');
        }
    }

    async delete(id: number): Promise<void> {
        try {
            const result = await this.editorialRepository.delete(id);
            if (result.affected === 0) {
                throw new NotFoundException('Editorial no encontrada.');
            }
        } catch (error) {
            throw new Error('No se pudo eliminar la editorial.');
        }
    }
}