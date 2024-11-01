import { Column } from 'typeorm';


export class ProductQuantity {
    @Column()
    productId: string;
    @Column()
    quantity: number;

    constructor(productId: string, quantity: number) {
        this.productId = productId;
        this.quantity = quantity;
    }
}