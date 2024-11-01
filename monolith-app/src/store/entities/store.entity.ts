import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';


export type StoreDocument = Store & Document;

@Entity()
export class Store {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    direction: string;

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    entityVersion: number;
}