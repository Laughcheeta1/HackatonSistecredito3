import { ApiProperty } from "@nestjs/swagger";

export class CreateStoreDto {
    @ApiProperty({ example: 'Store direction' })
    direction: string;
    @ApiProperty({ example: 'Store Name' })
    name: string;
    @ApiProperty({ example: 'entity version' })
    entityVersion: number;
    
}
