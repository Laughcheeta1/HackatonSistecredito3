import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { StoreStockService } from './store-stock.service';
import { UpdateStoreStockDto } from './dto/update-store-stock.dto';

@Controller('store-stock')
export class StoreStockController {
  constructor(private readonly storeStockService: StoreStockService) {}

  @Get(':storeId')
  findOne(@Param('storeId') storeId: string) {
    return this.storeStockService.findOne(storeId);
  }

  @Patch(':storeId')
  update(@Param('storeId') storeId: string, @Body() updateStoreStockDto: UpdateStoreStockDto) {
    return this.storeStockService.update(storeId, updateStoreStockDto);
  }
}
