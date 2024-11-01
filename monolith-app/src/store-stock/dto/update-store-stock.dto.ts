import { ApiProperty } from "@nestjs/swagger";

export class UpdateStoreStockDto {
    @ApiProperty()
    productId: string;
    @ApiProperty()
    quantity: number;
}
