import { BaseEntity } from "./BaseEntity";

export interface OrderItem extends BaseEntity {
    orderId: number;
    productId: number;
    quantity: number;
    price: number;
}
