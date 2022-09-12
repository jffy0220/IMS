import { Test, TestingModule } from '@nestjs/testing';
import { ItemDetailsController } from './item_details.controller';

describe('ItemDetailsController', () => {
  let controller: ItemDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemDetailsController],
    }).compile();

    controller = module.get<ItemDetailsController>(ItemDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
