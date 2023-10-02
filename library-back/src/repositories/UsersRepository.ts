import { BaseRepository } from "./BaseRepository";
import { User } from "../Types";

class UsersRepository extends BaseRepository<User>{
    constructor() {
        super("users");
    }
}

export default new UsersRepository();