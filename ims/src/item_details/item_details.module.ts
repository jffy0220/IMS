import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemDetailsController } from './item_details.controller';
import { ItemDetails } from './item_details.entity';
import { ItemDetailsService } from './item_details.service';

@Module({
    imports: [TypeOrmModule.forFeature([ItemDetails])],
    providers: [ItemDetailsService],
    controllers: [ItemDetailsController]
})
export class ItemDetailsModule {}
