import { Author } from "../Types";
import { BaseRepository } from "./BaseRepository";

class AuthorsRepository extends BaseRepository<Author>{
    constructor() {
        super("authors");
    }
}

export default new AuthorsRepository();