import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { ItemDetailsModule } from './item_details/item_details.module';
import { ItemTypeModule } from './item_type/item_type.module';
import { SupplierModule } from './supplier/supplier.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item/item.entity';
import { ItemDetails } from './item_details/item_details.entity';
import { ItemType } from './item_type/ItemType.entity';
import { Supplier } from './supplier/supplier.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'Lyte',
      entities: [Item, ItemDetails, ItemType, Supplier],
      synchronize: false,
      keepConnectionAlive: true
    }),
    ItemModule,
    ItemDetailsModule,
    ItemTypeModule,
    SupplierModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
