import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { isStringObject } from 'util/types';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    name: string;
    
    description: string;

    price: number;

    // category: string;

    // brand: string;

    suppliers: string[];

    // imageUrl: string;

    entityVersion: number;
}
