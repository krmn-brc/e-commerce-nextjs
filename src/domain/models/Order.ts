import { BaseEntity } from "./BaseEntity";

export interface Order extends BaseEntity {
    userId: number;
    total: number;
}
