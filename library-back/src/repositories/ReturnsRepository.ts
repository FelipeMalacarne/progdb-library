import { Return } from "../Types";
import { BaseRepository } from "./BaseRepository";

class ReturnsRepository extends BaseRepository<Return>{
    constructor() {
        super("returns");
    }
}

export default new ReturnsRepository();