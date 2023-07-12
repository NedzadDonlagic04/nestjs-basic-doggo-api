import { Injectable } from '@nestjs/common';
import { Doggo } from '../interface/doggo.interface';

@Injectable()
export class DoggoService {
  private doggo: Doggo[] = [];

  getAllDoggos(): Doggo[] {
    return this.doggo;
  }

  createDoggo({ name, breed } : Doggo): boolean {
    const doggo: Doggo = {
        id: this.doggo.length,
        name,
        breed
    }

    this.doggo.push(doggo);

    // returns true to show the creation was successful
    return true;
  }
}
