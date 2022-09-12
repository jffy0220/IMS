import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description_1: string;

    @Column()
    description_2: string;

    @Column()
    item_value: number;

    @Column()
    supplier_1_id: number;

    @Column()
    supplier_2_id: number;

    @Column()
    item_type_id: number;

    @Column()
    model_line_id: number;

    @Column()
    version: string;

    @Column()
    height: number;

    @Column()
    weight: number;

    @Column()
    length: number;

    @Column()
    depth: number;

}