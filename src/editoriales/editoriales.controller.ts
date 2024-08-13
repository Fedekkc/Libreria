import { Controller, Get, Post, Param, Put, Body, Delete } from "@nestjs/common";
import { EditorialDao } from "./editoriales.dao";

@Controller('editoriales')
export class EditorialesController {

    editoriales: EditorialDao[] = [];

    @Get()
    getAllEditoriales(): EditorialDao[] {
        return this.editoriales;
    }

    @Get(':id')
    getEditorialById(@Param('id') id: number): EditorialDao {
        const editorial = this.editoriales.find(editorial => editorial.id_editorial == id);
        return editorial;
    }

    @Post()
    createEditorial(@Body() editorial: EditorialDao): EditorialDao {
        const neweditorial = { ...editorial, id: '' + (this.editoriales.length)  }
        this.editoriales = [...this.editoriales, neweditorial];
        return neweditorial;
        
    }

    @Put(':id')
    updateEditorial(@Param('id') id: number, @Body() editorial: EditorialDao): EditorialDao {
        this.editoriales = this.editoriales.filter(editorial => editorial.id_editorial !== id);
        this.editoriales = [...this.editoriales, this.createEditorial(editorial)];
        return editorial;
    }

    @Delete(':id')
    deleteEditorial(@Param('id') id: number) {
        this.editoriales = this.editoriales.filter(editorial => editorial.id_editorial !== id);
    }


}