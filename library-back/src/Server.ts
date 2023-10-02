import express, { Application } from "express"
import Server from "./index";
import db from "./db";

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
