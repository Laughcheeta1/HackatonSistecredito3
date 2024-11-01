import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Inventory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productId: number;

    @Column()
    quantity: number;

    @Column()
    createdAt: Date;

    @Column()
    lastUpdated: Date;

    @Column()
    entityVersion: number;
}
