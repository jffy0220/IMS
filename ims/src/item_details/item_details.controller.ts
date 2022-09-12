import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { ItemDetails } from './item_details.entity';
import { ItemDetailsService } from './item_details.service';

@Controller('item-details')
export class ItemDetailsController {
    constructor(private itemDetailService: ItemDetailsService) {}

    @Get()
    async findAll(): Promise<ItemDetails[]> {
        return this.itemDetailService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<ItemDetails> {
        return this.itemDetailService.findOne(id);
    }

    @Post()
    create(@Body() itemDetail: ItemDetails) {
        return this.itemDetailService.create(itemDetail);
    }

    @Put()
    update(@Body() itemDetail: ItemDetails) {
        return this.itemDetailService.update(itemDetail);
    }
}
