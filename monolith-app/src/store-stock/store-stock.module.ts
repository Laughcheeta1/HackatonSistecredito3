import { Module } from '@nestjs/common';
import { StoreStockService } from './store-stock.service';
import { StoreStockController } from './store-stock.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreStock } from './entities/store-stock.entity';
import { Product } from 'src/product/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StoreStock]), TypeOrmModule.forFeature([Product])],
  controllers: [StoreStockController],
  providers: [StoreStockService],
})
export class StoreStockModule {}
