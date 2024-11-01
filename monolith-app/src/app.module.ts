import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { TypeOrmConfig } from './config/typeorm.config';
import { StoreModule } from './store/store.module';
import { StoreStockModule } from './store-stock/store-stock.module';
import { SupplierModule } from './supplier/supplier.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule available globally
    }),
    TypeOrmConfig,
    ProductModule, 
    StoreModule, 
    StoreStockModule, 
    SupplierModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
