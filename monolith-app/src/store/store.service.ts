import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from './entities/store.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { StoreNotFoundException } from 'src/Exceptions/store-not-found.exception';
import { StoreStock } from 'src/store-stock/entities/store-stock.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store) private storeRepository: Repository<Store>,
    @InjectRepository(StoreStock) private storeStockRepository: Repository<StoreStock>,
  ) {}

  async create(createStoreDto: CreateStoreDto) {
    console.log(createStoreDto);
    const store = this.storeRepository.create(createStoreDto);
    console.log(store);
    const createdStore = await this.storeRepository.save(store);
    
    const stockRepository = this.storeStockRepository.create({ store: createdStore._id, products: [] });
    this.storeStockRepository.save(stockRepository);

    return createdStore;
  }

  async findAll() {
    return await this.storeRepository.find();
  }

  async findOne(id: string) {
    const objectId = new ObjectId(id);
    const store = await this.storeRepository.findOne({
      where: { _id: objectId },
    });

    if (!store) {
      throw new StoreNotFoundException(id);
    }

    return store;
  }

  async update(id: string, updateStoreDto: UpdateStoreDto) {
    const result = await this.storeRepository.update(id, updateStoreDto);

    if (result.affected === 0) {
      throw new StoreNotFoundException(id);
    }
  }

  async remove(id: string) {
    const result = await this.storeRepository.delete(new ObjectId(id));

    if (result.affected === 0) {
      throw new StoreNotFoundException(id);
    }

    await this.storeStockRepository.delete({ store: new ObjectId(id) });
  }
}
