import { Column } from 'typeorm';


export class ProductQuantity {
    @Column()
    private productId: string;
    @Column()
    private quantity: number;

    constructor(productId: string, quantity: number) {
        this.productId = productId;
        this.quantity = quantity;
    }

    getProductId(): string {
        return this.productId;
    }

    getQuantity(): number {
        return this.quantity;
    }

    setQuantity(quantity: number): void {
        this.quantity = quantity;
    }
}