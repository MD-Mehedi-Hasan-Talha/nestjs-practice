import { Test, TestingModule } from '@nestjs/testing';
import { TransnameController } from './transname.controller';

describe('TransnameController', () => {
  let controller: TransnameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransnameController],
    }).compile();

    controller = module.get<TransnameController>(TransnameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
