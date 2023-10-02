import { Penalty } from "../Types";
import { BaseRepository } from "./BaseRepository";

class PenaltiesRepository extends BaseRepository<Penalty>{
    constructor() {
        super("penalties");
    }
}

export default new PenaltiesRepository();