import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemDetails } from './item_details.entity';

@Injectable()
export class ItemDetailsService {
    constructor( @InjectRepository(ItemDetails) private itemDetailsRepository: Repository<ItemDetails> ) {}

    findAll(): Promise<ItemDetails[]> {
        return this.itemDetailsRepository.find();
    }

    findOne(@Param('id') id: string): Promise<ItemDetails> {
        return this.itemDetailsRepository.findOneBy({id: parseInt(id, 10)});
    }

    async create(itemDetails: ItemDetails) {
        return this.itemDetailsRepository.save(itemDetails);
    }

    async update(@Body() itemDetails: ItemDetails) {
        return this.itemDetailsRepository.save(itemDetails);
    }
}
