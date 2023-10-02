import { Book } from "../Types";
import { BaseRepository } from "./BaseRepository";

class BooksRepository extends BaseRepository<Book>{
    constructor() {
      super("books");
    }
}

export default new BooksRepository();


