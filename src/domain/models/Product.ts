import { BaseEntity } from "./BaseEntity";
import { Category } from "./Category";

export interface Product extends BaseEntity
{
    categoryId:number
    name:string
    price:number
    stock:number
    category:Category
}