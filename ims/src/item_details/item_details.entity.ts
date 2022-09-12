import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ItemDetails {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    item_id: number;
    
    @Column()
    serial_number: string;
    
    @Column()
    supplier_id: number;
    
    @Column()
    po_id: number;
    
    @Column()
    date_received: Date;
    
    @Column()
    order_id: number;
    
    @Column()
    date_shipped: Date;
    
    @Column()
    carrier_id: number;
    
    @Column()
    date_delivered: Date;
    
    @Column()
    expiration: Date;
    
    @Column()
    barcode_1: string;
    
    @Column()
    barcode_2: string;

}