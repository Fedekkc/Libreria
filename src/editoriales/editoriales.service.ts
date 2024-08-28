import { Injectable } from '@nestjs/common';
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
        return this.editorialRepository.find();
    }

    async findOne(id: number): Promise<Editorial> {
        return this.editorialRepository.findOne({ where: { id_editorial: id } });
    }

    async create(editorialData: Partial<Editorial>): Promise<Editorial> {
        const editorial = this.editorialRepository.create(editorialData);
        return this.editorialRepository.save(editorial);
    }

    async update(id: number, editorialData: Partial<Editorial>): Promise<Editorial> {
        await this.editorialRepository.update(id, editorialData);
        return this.editorialRepository.findOne({ where: { id_editorial: id } });
    }

    async delete(id: number): Promise<void> {
        await this.editorialRepository.delete(id);
    }
}