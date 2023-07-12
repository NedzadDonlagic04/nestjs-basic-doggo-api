import { Module } from '@nestjs/common';
import { DoggoController } from './doggo/doggo.controller';
import { DoggoService } from './doggo/doggo.service';

@Module({
  imports: [],
  controllers: [DoggoController],
  providers: [DoggoService],
})
export class AppModule {}
