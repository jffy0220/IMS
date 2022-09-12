import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Supplier {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    poc_1_id: number;

    @Column()
    poc_2_id: number;

    @Column()
    business_address_id: number;

    @Column()
    date_created: Date;

    @Column()
    date_deleted: Date;

}