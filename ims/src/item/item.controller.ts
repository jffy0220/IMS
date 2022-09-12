import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { Item } from './item.entity';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
    constructor(private itemService: ItemService) {}

    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<Item> {
        return this.itemService.findOne(id);
    }

    @Post()
    create(@Body() address: Item) {
        return this.itemService.create(address);
    }

    @Put()
    update(@Body() address: Item) {
        return this.itemService.update(address);
    }
}
