import { Module } from '@nestjs/common';
import { StoreStockService } from './store-stock.service';
import { StoreStockController } from './store-stock.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreStock } from './entities/store-stock.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StoreStock])],
  controllers: [StoreStockController],
  providers: [StoreStockService],
})
export class StoreStockModule {}
