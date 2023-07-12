import { Module } from '@nestjs/common';
import { DoggoController } from './doggo/doggo.controller';

@Module({
  imports: [],
  controllers: [DoggoController],
  providers: [],
})
export class AppModule {}
