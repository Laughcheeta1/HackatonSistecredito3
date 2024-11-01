import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    category: string;

    @Column()
    brand: string;

    @Column()
    weight: number;

    @Column()
    unit: string;

    @Column()
    stock: number;

    @Column()
    sku: string;

    @Column()
    barcode: string;

    @Column()
    expirationDate: Date;

    @Column()
    supplier: string;

    @Column()
    imageUrl: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @Column()
    entityVersion: number;
}
