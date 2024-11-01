import { ApiProperty } from "@nestjs/swagger";

export class CreateSupplierDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    direction: string;

    @ApiProperty()
    email: string
    
    @ApiProperty()
    entityVersion: number;
}
