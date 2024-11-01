import { Injectable } from '@nestjs/common';
import { UpdateStoreStockDto } from './dto/update-store-stock.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreStock } from './entities/store-stock.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { StoreNotFoundException } from 'src/Exceptions/store-not-found.exception';

@Injectable()
export class StoreStockService {
  constructor(
    @InjectRepository(StoreStock) private storeStockRepository: Repository<StoreStock>,
  ) {}

  async findOne(storeId: string) {
    const objectId = new ObjectId(storeId);
    const storeStock = await this.storeStockRepository.findOne({
      where: { store: objectId },
    });

    if (!storeStock) {
      throw new StoreNotFoundException(storeId);
    }

    return storeStock;
  }

  async update(storeId: string, updateStoreStockDto: UpdateStoreStockDto) {
    const objectId = new ObjectId(storeId);
    const storeStock = await this.storeStockRepository.findOne({
      where: { store: objectId },
    });

    storeStock.products.find(product => product.getProductId() === updateStoreStockDto.productId).setQuantity(updateStoreStockDto.quantity);
  }
}
