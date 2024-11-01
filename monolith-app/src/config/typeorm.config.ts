import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CLUSTER_NAME, CLUSTER_URL, DB_NAME, DB_PASS, DB_RETRY_WRITES, DB_USER, DB_W } from './env.config';
import { Product } from 'src/product/entities/product.entity';
import { Store } from 'src/store/entities/store.entity';
import { StoreStock } from 'src/store-stock/entities/store-stock.entity';
import { Supplier } from 'src/supplier/entities/supplier.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: `mongodb+srv://${DB_USER}:${DB_PASS}@${CLUSTER_URL}/?retryWrites=${DB_RETRY_WRITES}&w=${DB_W}&appName=${CLUSTER_NAME}/${DB_NAME}`,
      synchronize: false,
      useUnifiedTopology: true,
      entities: [
        Product, 
        Store, 
        StoreStock, 
        Supplier
      ],
    }),
    TypeOrmModule.forFeature([Product, ]),
  ],
})
export class TypeOrmConfig {}