import { Injectable } from '@nestjs/common';
import { UpdateStoreStockDto } from './dto/update-store-stock.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreStock } from './entities/store-stock.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { StoreNotFoundException } from 'src/Exceptions/store-not-found.exception';
import { Product } from 'src/product/entities/product.entity';
import { ProductQuantity } from './entities/product-quantity';

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
    return Promise.all(storeStock.products.map(async productQuantity => {
      const product = await this.productRepository.findOne({
        where: { _id : new ObjectId(productQuantity.productId) }
      });

      return { product, quantity: productQuantity.quantity };
    }));
  }

  async update(storeId: string, updateStoreStockDto: UpdateStoreStockDto) {
    const objectId = new ObjectId(storeId);
    const storeStock = await this.storeStockRepository.findOne({
      where: { store: objectId },
    });

    let product = storeStock.products.find(product => product.productId === updateStoreStockDto.productId);
    if (product)  // The product is already registered in the store's stock
    {
      product.quantity = updateStoreStockDto.quantity;
    }
    else
    {
      storeStock.products.push(new ProductQuantity(updateStoreStockDto.productId, updateStoreStockDto.quantity));
    }

    await this.storeStockRepository.save(storeStock);
  }

  async removeAllProduct(productId: string) {
    const stores = await this.storeStockRepository.find();

    stores.forEach(store => {
      store.products = store.products.filter(product => product.productId !== productId);
    });
  }
}
