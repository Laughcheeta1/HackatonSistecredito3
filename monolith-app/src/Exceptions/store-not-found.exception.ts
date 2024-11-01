import { NotFoundException } from '@nestjs/common';

export class StoreNotFoundException extends NotFoundException {
    constructor(storeId: string) {
        super(`Store with ID ${storeId} not found`);
    }
}