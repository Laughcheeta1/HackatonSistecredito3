import { Injectable } from '@nestjs/common';
import { UpdateStoreStockDto } from './dto/update-store-stock.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreStock } from './entities/store-stock.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { StoreNotFoundException } from 'src/Exceptions/store-not-found.exception';
import { Product } from 'src/product/entities/product.entity';

@Injectable()
export class StoreStockService {
  constructor(
    @InjectRepository(StoreStock) private storeStockRepository: Repository<StoreStock>,
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async findOne(storeId: string) {
    const objectId = new ObjectId(storeId);
    const storeStock = await this.storeStockRepository.findOne({
      where: { store: objectId },
    });

    if (!storeStock) {
      throw new StoreNotFoundException(storeId);
    }
    
    // Map the productQuantity to the product and quantity
    return storeStock.products.map(productQuantity => {

      const product = this.productRepository.findOne({
        where: { _id : new ObjectId(productQuantity.getProductId()) }
      });

      return { product, quantity: productQuantity.getQuantity() };
    });
  }

  async update(storeId: string, updateStoreStockDto: UpdateStoreStockDto) {
    const objectId = new ObjectId(storeId);
    const storeStock = await this.storeStockRepository.findOne({
      where: { store: objectId },
    });

    storeStock.products.find(product => product.getProductId() === updateStoreStockDto.productId).setQuantity(updateStoreStockDto.quantity);
  }
}
