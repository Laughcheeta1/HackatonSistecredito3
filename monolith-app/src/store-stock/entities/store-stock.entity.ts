import { Entity, Column, ObjectIdColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectId } from 'mongodb';
import { ProductQuantity } from 'src/store-stock/entities/product-quantity';

@Entity()
export class StoreStock {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    store: ObjectId;

    @Column()
    products: ProductQuantity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    entityVersion: number;
}
