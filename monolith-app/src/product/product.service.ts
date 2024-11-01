import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductNotFoundException } from 'src/Exceptions/product-not-found.exception';
import { ObjectId } from 'mongodb';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private productRepository: Repository<Product>) {}

  async create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    return await this.productRepository.save(product);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: string) {
    const objectId = new ObjectId(id);
    const product = await this.productRepository.findOne({
      where: { _id: objectId },
    });

    if (!product) {
      throw new ProductNotFoundException(id);
    }

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const result = await this.productRepository.update(id, updateProductDto);

    if (result.affected === 0) {
      throw new ProductNotFoundException(id);
    }
  }

  async remove(id: string) {
    const result = await this.productRepository.delete(id);

    if (result.affected === 0) {
      throw new ProductNotFoundException(id);
    }
  }
}
