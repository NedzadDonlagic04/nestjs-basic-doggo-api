import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DoggoService } from './doggo.service';
import { Doggo } from 'src/interface/doggo.interface';
import { DoggoDTO } from 'src/dto/doggo.dto';

@Controller('doggo')
export class DoggoController {
    constructor(private doggoService: DoggoService) {}

    @Get()
    getAll(): Doggo[] {
        return this.doggoService.getAllDoggos();
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number): Doggo | string {
        return this.doggoService.getSingleDoggo(id);
    }

    @Post()
    create(@Body() body: DoggoDTO): string {
        if(this.doggoService.createDoggo(body)) {
            return "Doggo created!";
        }
        return "Doggo not created :(";
    }

    @Delete(':id')
    deleteOne(@Param('id', ParseIntPipe) id: number): string {
        if(this.doggoService.deleteDoggo(id)) {
            return "Doggo deleted :(";
        }
        return "ID not valid, doggo not deleted!";
    }

    @Put(':id')
    updateOne(@Param('id', ParseIntPipe) id: number, @Body() body: DoggoDTO): string {
        if(this.doggoService.updateDoggo(id, body)) {
            return "Doggo updated!";
        }
        return "ID not valid, doggo not updated :(";
    }

}
