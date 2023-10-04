import { Request, Response } from "express";
import repository from "../repositories/AuthorsRepository";

export default class AuthorsController {

    async findAll(req: Request, res: Response): Promise<void> {
        const searchParams = req.query;
        try{
            const authors = await repository.retrieveAll(searchParams);
            res.json(authors);
        } catch (err: any) {
            console.error(err);
            res.status(500).json({ message: "Internal server error" });
        }

    }

    async findOne(req: Request, res: Response): Promise<void> {
        const authorId: number = parseInt(req.params.id);
        try{
            const author = await repository.retrieveById(authorId);
            res.status(200).json(author);
        }
        catch (err: any) {
            console.error(err);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    async create(req: Request, res: Response): Promise<void> {
        const author = req.body;
        console.log(author);
        if (!author.name || !author.birthdate) {
            res.status(400).json({ message: "Campos inválidos" });
            return;
        }

        // Convert birthdate to MySQL date format
        author.birthdate = new Date(author.birthdate).toISOString().slice(0, 19).replace('T', ' ');
        if (author.deathdate) {
            author.deathdate = new Date(author.deathdate).toISOString().slice(0, 19).replace('T', ' ');
        }

        const savedAuthor = await repository.save(author);
        res.status(201).json(savedAuthor);
    }
    async update(req: Request, res: Response): Promise<void> {
        const authorId: number = parseInt(req.params.id);
        const author = req.body;
        author.id = authorId;
    
        // Convert birthdate and deathdate to MySQL date format
        const birthdate = author.birthdate ? new Date(author.birthdate).toISOString().slice(0, 19).replace('T', ' ') : null;
        const deathdate = author.deathdate ? new Date(author.deathdate).toISOString().slice(0, 19).replace('T', ' ') : null;
    
        // Check if author object is valid
        if (!author.name || !birthdate) {
            res.status(400).json({ message: "Invalid author object" });
            return;
        }
    
        const rowsAffected: number = await repository.update({ ...author, birthdate, deathdate });
        if (rowsAffected > 0) {
            res.json({ message: "Author updated successfully" });
        } else {
            res.status(404).json({ message: "Author not found" });
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        const authorId: number = parseInt(req.params.id);
        try {
            const rowsAffected: number = await repository.delete(authorId);
            if (rowsAffected > 0) {
                res.json({ message: "Author deleted successfully" });
            } else {
                res.status(404).json({ message: "Author not found" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    
}