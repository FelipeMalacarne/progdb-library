import { Loan } from "../Types";
import { BaseRepository } from "./BaseRepository";

class LoansRepository extends BaseRepository<Loan>{
    constructor() {
        super("loans");
    }
}

export default new LoansRepository();