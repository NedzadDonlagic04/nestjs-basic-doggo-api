import { Test, TestingModule } from '@nestjs/testing';
import { DoggoController } from './doggo.controller';

describe('DoggoController', () => {
  let controller: DoggoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoggoController],
    }).compile();

    controller = module.get<DoggoController>(DoggoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
