import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreDto } from './create-store.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStoreDto extends PartialType(CreateStoreDto) {
    @ApiProperty({ example: 'New Store Direction' })
    direction: string;
    @ApiProperty({ example: 'New Store Name' })
    name: string;
}
