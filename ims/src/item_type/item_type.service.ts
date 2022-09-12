import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemType } from './ItemType.entity';

@Injectable()
export class ItemTypeService {
    constructor( @InjectRepository(ItemType) private itemRepository: Repository<ItemType> ) {}

    findAll(): Promise<ItemType[]> {
        return this.itemRepository.find();
    }

    findOne(@Param('id') id: string): Promise<ItemType> {
        return this.itemRepository.findOneBy({id: parseInt(id, 10)});
    }

    async create(itemType: ItemType) {
        return this.itemRepository.save(itemType);
    }

    async update(@Body() itemType: ItemType) {
        return this.itemRepository.save(itemType);
    }
}
