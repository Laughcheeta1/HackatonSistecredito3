import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_URL } from './env.config';
import { Product } from 'src/product/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: DB_URL,
      synchronize: true, // Automatically syncs schema with DB (use with caution in production)
      useUnifiedTopology: true,
      entities: [Product, ],
    }),
    TypeOrmModule.forFeature([Product, ]),
  ],
})
export class TypeOrmConfig {}