import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './supplier.entity';

@Injectable()
export class SupplierService {
    constructor( @InjectRepository(Supplier) private supplierRepository: Repository<Supplier> ) {}

    findAll(): Promise<Supplier[]> {
        return this.supplierRepository.find();
    }

    findOne(@Param('id') id: string): Promise<Supplier> {
        return this.supplierRepository.findOneBy({id: parseInt(id, 10)});
    }

    async create(supplier: Supplier) {
        return this.supplierRepository.save(supplier);
    }

    async update(@Body() supplier: Supplier) {
        return this.supplierRepository.save(supplier);
    }
}
