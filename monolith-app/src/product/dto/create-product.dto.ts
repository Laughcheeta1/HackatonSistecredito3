import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty({ example: 'Product Name' })
    name: string;
    
    @ApiProperty({ example: 'Product Description' })
    description: string;

    @ApiProperty({ example: 100 })
    price: number;

    @ApiProperty({ example: ['supplier1', 'supplier2'] })
    suppliers: string[];

    @ApiProperty({ example: 1 })
    entityVersion: number;
}
