export class createItemDetailsDto {
    id: number;
    item_id: number;
    serial_number: string;
    supplier_id: number;
    po_id: number;
    date_received: Date;
    order_id: number;
    date_shipped: Date;
    carrier_id: number;
    date_delivered: Date;
    expiration: Date;
    barcode_1: string;
    barcode_2: string;
}