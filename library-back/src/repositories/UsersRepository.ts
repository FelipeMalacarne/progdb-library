import { BaseRepository } from "./BaseRepository";
import { User } from "../Types";
import dbConn from "../db";
import { RowDataPacket } from "mysql2";

class UsersRepository extends BaseRepository<User>{
    constructor() {
        super("users");
    }

    registerUser = (email: string, password: string, name: string): Promise<User> => {
        return new Promise((resolve, reject) => {
            dbConn.query("CALL register_user(?, ?, ?, @created_user)", [email, password, name], (err, res) => {
                if (err) reject(err);
                else {
                    dbConn.query("SELECT @created_user AS created_user", (err, res: RowDataPacket[]) => {
                        if (err) reject(err);
                        else resolve(JSON.parse(res[0].created_user));
                    });
                }
            });
        });
    };

    authenticateUser = (email: string, password: string): Promise<User> => {
        return new Promise((resolve, reject) => {
            dbConn.query("CALL authenticate_user(?, ?, @user_obj)", [email, password], (err, res) => {
                if (err) reject(err);
                else {
                    dbConn.query("SELECT @user_obj AS user_obj", (err, res: RowDataPacket[]) => {
                        if (err) reject(err);
                        else resolve(JSON.parse(res[0].user_obj));
                    });
                }
            })
        });


    }


}

export default new UsersRepository();