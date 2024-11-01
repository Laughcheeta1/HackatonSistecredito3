import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { InventoryModule } from './inventory/inventory.module';
import { ProductModule } from './product/product.module';
import { MongoConfigModule } from './config/mongo.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule available globally
    }),
    MongoConfigModule,
    InventoryModule, 
    ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
