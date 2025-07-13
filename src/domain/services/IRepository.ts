export interface IRepository<T> {
    getAll():Promise<T[]>
    getById(id:number):Promise<T | null>
    getBySingle(column:string, value:string):Promise<T | null>
    add(entity:Omit<T, "id">):Promise<T>
    update(entity:Partial<T>):Promise<T>
    delete(entity:Partial<T>):Promise<void>
}