import { ObjectId } from 'mongodb';
import { StoreStock } from 'src/store-stock/entities/store-stock.entity';
import { Entity, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Product {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    // @Column()
    // category: string;

    // @Column()
    // brand: string;

    @Column()
    suppliers: string[];

    // @Column()
    // imageUrl: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    entityVersion: number;
}
