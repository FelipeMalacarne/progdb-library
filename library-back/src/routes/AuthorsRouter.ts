import { Router } from "express";
import AuthorsController from "../controllers/AuthorsController";

class AuthorsRouter {
  public router: Router = Router();
  private controller = new AuthorsController();

  constructor() {
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

export default new AuthorsRouter().router;