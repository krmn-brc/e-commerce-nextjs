import { supabase } from "@/core/lib/supabase";
import { BaseEntity } from "@/domain/models/BaseEntity";
import { IRepository } from "@/domain/services/IRepository";
import { SupabaseClient } from "@supabase/supabase-js";

export abstract class BaseRepository<T extends BaseEntity> implements IRepository<T> {
    protected table: string
    protected supabase: SupabaseClient
    constructor(table: string) {
        this.table = table
        this.supabase = supabase
    }
    async getAll(): Promise<T[]> {
        const { data, error } = await supabase.from(this.table).select("*")
        if(error) throw error;
        return data as T[]
    }
    async getById(id: number): Promise<T | null> {
       const {data, error} = await 
       supabase.from(this.table)
       .select("*")
       .eq("id", id)
       .single()
       if(error) throw error;
       return data as T

    }
    async getBySingle(column:string, value:string): Promise<T | null> {
        const {data, error} = await 
       supabase.from(this.table)
       .select("*")
       .eq(`${column}`, value)
       .single()
       if(error) throw error;
       return data as T
    }
    async add(entity: Omit<T, "id">): Promise<T> {
        const { data, error} = await supabase.from(this.table)
        .insert(entity)
        .select()
        .single()
        if(error) throw error;
        return data as T
    }
    async update(entity: Partial<T>): Promise<T> {
        const {data, error} = await supabase.from(this.table)
        .update(entity)
        .eq("id", entity.id)
        .select()
        .single()
        if(error) throw error;

        return data as T
    }
    async delete(entity: Partial<T>): Promise<void> {
        const { error } = await supabase.from(this.table)
        .delete().eq("id", entity.id)
        if(error)
            throw error;
    }


}