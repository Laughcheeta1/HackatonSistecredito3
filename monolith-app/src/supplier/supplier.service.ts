import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './entities/supplier.entity';
import { SupplierNotFoundException } from './exceptions/supplier-not-found.exception';
import { ObjectId } from 'mongodb';



@Injectable()
export class SupplierService {
  constructor(@InjectRepository(Supplier) private supplierRepository: Repository<Supplier>) {}

  async create(createSupplierDto: CreateSupplierDto) {
    const supplier = this.supplierRepository.create(createSupplierDto);
    return await this.supplierRepository.save(supplier);
  }

  async findAll() {
    return await this.supplierRepository.find();
  }

  async findOne(id: String) {
    const objectId = new ObjectId(id);
    const product = await this.productRepository.findOne({
      where: { _id: objectId },
    });

    if (!product) {
      throw new ProductNotFoundException(id);
    }

    return product;
  }

  async update(id: String, updateSupplierDto: UpdateSupplierDto) {
    return `This action updates a #${id} supplier`;
  }

  async remove(id: String) {
    return `This action removes a #${id} supplier`;
  }
}
