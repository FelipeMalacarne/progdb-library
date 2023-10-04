import { Router } from "express";
import BooksController from "../controllers/BooksController";

class BooksRouter {
    private controller: BooksController = new BooksController();
    public router: Router = Router();

    constructor(){
        this.initializeRoutes();
    }

    initializeRoutes(){
        this.router.get("/", this.controller.findAll);
        this.router.get("/:id", this.controller.findOne);
        this.router.post("/", this.controller.create);
        this.router.put("/:id", this.controller.update);
        this.router.delete("/:id", this.controller.delete);
    }

}

export default new BooksRouter().router;
