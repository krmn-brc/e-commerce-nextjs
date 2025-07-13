import { BaseEntity } from "./BaseEntity";

export interface User extends BaseEntity
{
    firstName:string
    lastName:string
    email:string
    passwordHash:string
}