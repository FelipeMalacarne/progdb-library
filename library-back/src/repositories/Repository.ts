export interface Repository<T> {
    save(entity: T): Promise<T>;
    retrieveAll(searchParams: any): Promise<T[]>;
    retrieveById(entityId: number): Promise<T | undefined>;
    update(entity: T): Promise<number>;
    delete(entityId: number): Promise<number>;
}
