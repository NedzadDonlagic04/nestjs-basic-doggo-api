import { Injectable } from '@nestjs/common';
import { Doggo } from '../interface/doggo.interface';

@Injectable()
export class DoggoService {
    private doggos: Doggo[] = [];

    getAllDoggos(): Doggo[] {
        return this.doggos;
    }

    getSingleDoggo(id: number): Doggo | string {
        return this.doggos.find(doggo => doggo.id === id) ?? "Doggo with that id doesn't exist :(";
    }

    createDoggo({ name, breed } : Doggo): boolean {
        const doggo: Doggo = {
            id: this.doggos.length,
            name,
            breed
        }

        this.doggos.push(doggo);

        // returns true to show the creation was successful
        return true;
    }
}
