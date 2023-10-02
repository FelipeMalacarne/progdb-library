import { Application } from "express";
import BooksRouter from "./BooksRouter";

export default class Routes {
    constructor(app: Application){
        app.use("/api/books", BooksRouter);
        app.get("/", (req, res) => {
            res.send("Hello World!");
          }
        )
    }
}