import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Post()
  create(@Body() body: DoggoDTO) {
    if(this.doggoService.createDoggo(body)) {
        return "Doggo created!";
    }
    return "Doggo not created :(";
  }
}
