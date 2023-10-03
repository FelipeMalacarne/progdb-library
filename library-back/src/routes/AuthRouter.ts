import { Router } from "express";
import AuthController from "../controllers/AuthController";

class AuthRouter {
    private controller = new AuthController();
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }

    initializeRoutes(){
        this.router.post("/login", this.controller.authencateUser);
        this.router.post("/register", this.controller.registerUser);
    }

}

export default new AuthRouter().router;