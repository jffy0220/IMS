import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemType } from './ItemType.entity';
import { ItemTypeController } from './item_type.controller';
import { ItemTypeService } from './item_type.service';

@Module({
    imports: [TypeOrmModule.forFeature([ItemType])],
    providers: [ItemTypeService],
    controllers: [ItemTypeController]
})
export class ItemTypeModule {}
