import { Application } from "express";
import BooksRouter from "./BooksRouter";
import AuthRouter from "./AuthRouter";
import AuthorsRouter from "./AuthorsRouter";

export default class Routes {
    constructor(app: Application){
        app.use("/api/books", BooksRouter);
        app.use("/api/auth", AuthRouter);
        app.use("/api/authors", AuthorsRouter);


        app.get("/", (req, res) => {
            res.send("Hello World!");
          }
        )
    }
}