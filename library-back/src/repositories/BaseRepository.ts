import { Connection, ResultSetHeader, RowDataPacket } from "mysql2";
import { Repository } from "./Repository";
import dbConn from "../db";

export class BaseRepository<T extends RowDataPacket> implements Repository<T> {
    private connection: Connection;
    private tableName: string;

    constructor(tableName: string) {
        this.connection = dbConn;
        this.tableName = tableName;
    }

    private camelToSnakeCase(str: string): string {
        return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
    }

    private convertObjectKeysToSnakeCase(obj: any): any {
        const snakeCaseObj: any = {};
        for (const [key, value] of Object.entries(obj)) {
            const snakeCaseKey = this.camelToSnakeCase(key);
            snakeCaseObj[snakeCaseKey] = value;
        }
        return snakeCaseObj;
    }

    save(entity: T): Promise<T> {
        const sql = `INSERT INTO ${this.tableName} SET ?`;
        const snakeCaseEntity = this.convertObjectKeysToSnakeCase(entity);
        return new Promise((resolve, reject) => {
            this.connection.query(sql, snakeCaseEntity, (err, res) => {
                if (err) reject(err);
                else {
                    const savedEntity = { ...entity, id: (res as ResultSetHeader).insertId };
                    resolve(savedEntity);
                }
            });
        });
    }
    
    retrieveAll(searchParams: any): Promise<T[]> {
        let query: string = `SELECT * FROM ${this.tableName}`;
        let conditions: string[] = [];

        const snakeCaseSearchParams = this.convertObjectKeysToSnakeCase(searchParams);

        for (const [key, value] of Object.entries(snakeCaseSearchParams)) {
            if (value !== undefined) {
                if (key == 'id'){
                    conditions.push(`${key} = ${value}`);
                } else if (typeof value === "string") {
                    conditions.push(`${key} LIKE '%${value}%'`);
                } else {
                    conditions.push(`${key} = ${value}`);
                }
            }
        }

        if (conditions.length) {
            query += " WHERE " + conditions.join(" AND ");
        }

        return new Promise((resolve, reject) => {
            this.connection.query<T[]>(query, (err, res) => {
                if (err) reject(err);
                else resolve(res);
            });
        });
    }

    retrieveById(id: number): Promise<T | undefined> {
        const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;
        return new Promise((resolve, reject) => {
            this.connection.query<T[]>(sql, [id], (err, res) => {
                if (err) reject(err);
                else resolve(res[0]);
            });
        });
    }

    update(entity: T): Promise<number> {
        const sql = `UPDATE ${this.tableName} SET ? WHERE id = ?`;
        const id = (entity as any).id;
        const entityWithoutId = { ...entity };
        delete (entityWithoutId as any).id;
        const snakeCaseEntity = this.convertObjectKeysToSnakeCase(entityWithoutId);
        return new Promise((resolve, reject) => {
            this.connection.query(sql, [snakeCaseEntity, id], (err, res) => {
                if (err) reject(err);
                else resolve((res as ResultSetHeader).affectedRows);
            });
        });
    }

    delete(id: number): Promise<number> {
        const sql = `DELETE FROM ${this.tableName} WHERE id = ?`;
        return new Promise((resolve, reject) => {
            this.connection.query(sql, [id], (err, res) => {
                if (err) reject(err);
                else resolve((res as ResultSetHeader).affectedRows);
            });
        });
    }
}