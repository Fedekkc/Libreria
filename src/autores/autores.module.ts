import { Module } from '@nestjs/common';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from './autores.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Autor])],
    exports: [TypeOrmModule],
    controllers: [ AutoresController ],
    providers: [AutoresService]
    
})
export class AutoresModule {}
