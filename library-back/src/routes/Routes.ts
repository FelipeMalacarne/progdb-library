import { Application } from "express";
import BooksRouter from "./BooksRouter";
import AuthRouter from "./AuthRouter";

export default class Routes {
    constructor(app: Application){
        app.use("/api/books", BooksRouter);
        app.use("/api/auth", AuthRouter);


        app.get("/", (req, res) => {
            res.send("Hello World!");
          }
        )
    }
}