import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { StoreStock } from 'src/store-stock/entities/store-stock.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Store]), TypeOrmModule.forFeature([StoreStock])],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
