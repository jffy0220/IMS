import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { ItemType } from './ItemType.entity';
import { ItemTypeService } from './item_type.service';

@Controller('item-type')
export class ItemTypeController {
    constructor(private itemTypeService: ItemTypeService) {}

    @Get()
    async findAll(): Promise<ItemType[]> {
        return this.itemTypeService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<ItemType> {
        return this.itemTypeService.findOne(id);
    }

    @Post()
    create(@Body() itemType: ItemType) {
        return this.itemTypeService.create(itemType);
    }

    @Put()
    update(@Body() itemType: ItemType) {
        return this.itemTypeService.update(itemType);
    }
}
