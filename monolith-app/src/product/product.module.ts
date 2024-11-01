import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from './entities/product.entity';
import { StoreStockService } from 'src/store-stock/store-stock.service';
import { StoreStock } from 'src/store-stock/entities/store-stock.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), TypeOrmModule.forFeature([StoreStock])],
  controllers: [ProductController],
  providers: [ProductService, StoreStockService],
})
export class ProductModule {}
