import { RowDataPacket } from "mysql2";

export default interface Book extends RowDataPacket {
    id: number;
    title: string;
    edition: string;
    status: string;
    publicationDate: Date;
    publisher: string;
    authorId: number;
}

