import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Autor } from "./autores.entity";
import { AutorDto } from "./autores.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AutoresService {
    constructor(
        @InjectRepository(Autor)
        private autoresRepository: Repository<Autor>,
    ) {
        console.log(autoresRepository);
    }

    isDniValid(dni: string): boolean {
        if (dni.length !== 8) {
            return false;
        }
        const re = /^[0-9]*$/;

        if (dni.match(re)) {
            return true;
        } else {
            return false;
        }
    }

    isCuitValid(cuit: string): boolean {
        if (cuit.length !== 11) {
            return false;
        }
        const re = /^[0-9]*$/;

        if (cuit.match(re)) {
            return true;
        } else {
            return false;
        }
    }

    async findAll(): Promise<Autor[]> {
        try {
            return await this.autoresRepository.find();
        } catch (error) {
            
            console.error("Error: ", error);
            throw error; 
        }
    }

    async findOne(id: number): Promise<Autor | null> {
        try {
            return await this.autoresRepository.findOneBy({ id_autor: id });
        } catch (error) {
            
            console.error("Error: ", error);
            throw error; 
        }
    }

    async create(autor: AutorDto): Promise<void> {
        try {
            console.log(autor);
            await this.autoresRepository.insert(autor);
        } catch (error) {
            console.error("Error: ", error);
            throw error;
        }
    }

    async remove(id: number): Promise<void> {
        try {
            await this.autoresRepository.delete(id);
        } catch (error) {
            
            console.error("Error: ", error);
            throw error; 
        }
    }

    async update(id: number, autor: AutorDto): Promise<AutorDto> {
        try {
            await this.autoresRepository.update(id, autor);
            return await this.autoresRepository.findOne( { where: { id_autor: id  } } );
        } catch (error) {
            console.error("Error: ", error);
            throw error;
        }
    }

    async delete(id: number): Promise<AutorDto> {
        try {
            await this.autoresRepository.delete(id);
            return await this.autoresRepository.findOne( { where: { id_autor: id  } } );

        } catch (error) {
            console.error("Error: ", error);
            throw error;
        }
    }
}

export default AutoresService;