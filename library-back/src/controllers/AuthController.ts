import { Request, Response } from "express";
import { User } from "../Types";
import repository from "../repositories/UsersRepository";

export default class AuthController{
    async authencateUser(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: "Campos inválidos" });
            return;
        }
        try {
            const user = await repository.authenticateUser(email, password);
            res.status(200).json(user);
        } catch (err: any) {
            console.error(err);
            if (err.code === "ER_NO_SUCH_TABLE") {
                res.status(401).json({ message: "Email or password incorrect" });
            } else {
                res.status(500).json({ message: "Internal server error" });
            }
        }


    }

    async registerUser(req: Request, res: Response): Promise<void> {
        const { email, password, name } = req.body;
        if (!email || !password || !name) {
            res.status(400).json({ message: "Campos inválidos" });
            return;
        }
        try {
            const user = await repository.registerUser(email, password, name);
            res.status(201).json(user);
        } catch (err: any) {
            console.error(err);
            if (err.code === "ER_DUP_ENTRY" && err.sqlState === "23000") {
                res.status(409).json({ message: "Email already exists" });
            } else {
                res.status(500).json({ message: "Internal server error" });
            }
        }

    }

}