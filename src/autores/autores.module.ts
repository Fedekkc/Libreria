import { Module } from '@nestjs/common';
import { AutoresController } from './autores.controller';
import { autoresService } from './autores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from './autores.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Autor])],
    exports: [TypeOrmModule],
    controllers: [ AutoresController ],
    providers: [autoresService]
    
})
export class AutoresModule {}
