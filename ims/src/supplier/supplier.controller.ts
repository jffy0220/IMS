import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { Supplier } from './supplier.entity';
import { SupplierService } from './supplier.service';

@Controller('supplier')
export class SupplierController {
    constructor(private supplierService: SupplierService) {}

    @Get()
    async findAll(): Promise<Supplier[]> {
        return this.supplierService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<Supplier> {
        return this.supplierService.findOne(id);
    }

    @Post()
    create(@Body() supplier: Supplier) {
        return this.supplierService.create(supplier);
    }

    @Put()
    update(@Body() supplier: Supplier) {
        return this.supplierService.update(supplier);
    }
}
