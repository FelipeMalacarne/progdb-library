import { Request, Response } from "express";
import repository from "../repositories/BooksRepository";
import { Book } from "../Types";


export default class BooksController {

  async create(req: Request, res: Response): Promise<void> {
    const book: Book = req.body;
    if (!book.title || !book.edition || !book.status || !book.publicationDate || !book.publisher || !book.authorId) {
      res.status(400).json({ message: "Campos inválidos" });
      return;
    }

    const savedBook: Book = await repository.save(book);
    res.status(201).json(savedBook);
  }

  async findAll(req: Request, res: Response): Promise<void> {
    const searchParams = req.query;
    try{
      const books: Book[] = await repository.retrieveAll(searchParams);
      res.json(books);
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }

  }

  async findOne(req: Request, res: Response): Promise<void> {
    const bookId: number = parseInt(req.params.id);
    try{
      const book: Book | undefined = await repository.retrieveById(bookId);
      res.status(200).json(book);
    }
    catch (err: any) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const bookId: number = parseInt(req.params.id);
    const book: Book = req.body;
    book.id = bookId;
    const rowsAffected: number = await repository.update(book);
    if (rowsAffected > 0) {
      res.json({ message: "Book updated successfully" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  }
  async delete(req: Request, res: Response): Promise<void> {
    try {
      const bookId: number = parseInt(req.params.id);
      const rowsAffected: number = await repository.delete(bookId);
      if (rowsAffected > 0) {
        res.json({ message: "Book deleted successfully" });
      } else {
        res.status(404).json({ message: "Book not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }


}