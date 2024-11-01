import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_URL } from './env.config';

@Module({
  imports: [
    MongooseModule.forRoot(DB_URL), // Replace with your MongoDB connection string
  ],
  exports: [MongooseModule],
})
export class MongoConfigModule {}