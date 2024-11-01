import { PartialType } from '@nestjs/mapped-types';
import { CreateSupplierDto } from './create-supplier.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSupplierDto extends PartialType(CreateSupplierDto) {
    @ApiProperty()
    name: string;

    @ApiProperty()
    direction: string;

    @ApiProperty()
    email: string
}
