import { NotFoundException } from '@nestjs/common';

export class SupplierNotFoundException extends NotFoundException {
    constructor(supplierId: string) {
        super(`Supplier with ID ${supplierId} not found`);
    }
}