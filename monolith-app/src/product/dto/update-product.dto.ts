import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { isStringObject } from 'util/types';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @ApiProperty({ example: 'New Product Name' })
    name: string;
    
    @ApiProperty({ example: 'New Product Description' })
    description: string;

    @ApiProperty({ example: 200 })
    price: number;

    @ApiProperty({ example: ['supplier3', 'supplier4'] })
    suppliers: string[];

    @ApiProperty({ example: 2 })
    entityVersion: number;
}
