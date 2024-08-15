import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Autor } from "./autores.entity";
import { format } from "date-fns";


export class autoresService{
    constructor(
        @InjectRepository(Autor)
        private autoresRepository: Repository<Autor>, 
    ) {}

    isDniValid(dni: string): boolean{
        if(dni.length != 8){
            return false;
        }
        const re = '/^[0-9]*$/';
        
        if(dni.match(re))
        {
            return true
        }
        else return false;   

    }

    isCuitValid(cuit: string): boolean{ //TODO: esta funcion no es de acá.
        if(cuit.length != 11){
            return false;
        }
        const re = '/^[0-9]*$/';
        
        if(cuit.match(re))
        {
            return true
        }
        else return false;   

    }

    formatDate(date: Date): string { //TODO: esta funcion no es de acá.
        return format(date, 'YYYY-MM-DD');       

    }

    

    async create(autor: Autor): Promise<void>{

        await this.autoresRepository.insert(autor);                 
    }

    findAll():Promise<Autor[]> {
        return this.autoresRepository.find();
    }

    findOne(id: number):Promise<Autor | null>{
        return this.autoresRepository.findOneBy( { id_autor: id } );
    }
    
    async remove(id: number): Promise<void>{
        await this.autoresRepository.delete(id);
    }

    


}