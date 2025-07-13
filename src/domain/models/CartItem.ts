import { BaseEntity } from "./BaseEntity";


export interface CartItem extends BaseEntity {
    cartId: number;
    productId: number;
    quantity: number;
}
