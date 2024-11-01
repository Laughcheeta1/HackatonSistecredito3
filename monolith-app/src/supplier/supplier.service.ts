import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './entities/supplier.entity';
import { SupplierNotFoundException } from 'src/exceptions/supplier-not-found.exception';
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

  async findOne(id: string) {
    const objectId = new ObjectId(id);
    const supplier = await this.supplierRepository.findOne({
      where: { _id: objectId },
    });

    if (!supplier) {
      throw new SupplierNotFoundException(id);
    }

    return supplier;
  }

  async update(id: string, updateSupplierDto: UpdateSupplierDto) {
    const result = await this.supplierRepository.update(id, updateSupplierDto);

    if (result.affected === 0) {
      throw new SupplierNotFoundException(id);
    }
  }

  async remove(id: string) {
    const result = await this.supplierRepository.delete(id);

    if (result.affected === 0) {
      throw new SupplierNotFoundException(id);
    }
  }
}
