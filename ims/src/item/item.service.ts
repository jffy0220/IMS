import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemService {
    constructor( @InjectRepository(Item) private itemRepository: Repository<Item> ) {}

    findAll(): Promise<Item[]> {
        return this.itemRepository.find();
    }

    findOne(@Param('id') id: string): Promise<Item> {
        return this.itemRepository.findOneBy({id: parseInt(id, 10)});
    }

    async create(item: Item) {
        return this.itemRepository.save(item);
    }

    async update(@Body() item: Item) {
        return this.itemRepository.save(item);
    }
}
