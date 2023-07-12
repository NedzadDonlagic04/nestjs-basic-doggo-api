import { Test, TestingModule } from '@nestjs/testing';
import { DoggoService } from './doggo.service';

describe('DoggoService', () => {
  let service: DoggoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoggoService],
    }).compile();

    service = module.get<DoggoService>(DoggoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
