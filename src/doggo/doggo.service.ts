import { Injectable } from '@nestjs/common';
import { Doggo } from '../interface/doggo.interface';

@Injectable()
export class DoggoService {
    private doggos: Doggo[] = [];
    private doggoID = 0;

    getAllDoggos(): Doggo[] {
        return this.doggos;
    }

    getSingleDoggo(id: number): Doggo | string {
        return this.doggos.find(doggo => doggo.id === id) ?? "Doggo with that id doesn't exist :(";
    }

    createDoggo({ name, breed } : Doggo): boolean {
        const doggo: Doggo = {
            id: this.doggoID,
            name,
            breed
        }

        this.doggos.push(doggo);

        this.doggoID++;

        // returns true to show the creation was successful
        return true;
    }

    deleteDoggo(id: number): boolean {
        const index = this.doggos.findIndex(doggo => doggo.id === id);
    
        if(index === -1) return false;

        this.doggos.splice(index, 1);

        return true;
    }

    updateDoggo(id: number, { name, breed } : Doggo): boolean {
        if(id in this.doggos) {
            this.doggos[id] = { id, name, breed };
            return true;
        }
        return false;
    }
}
