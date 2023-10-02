import { RowDataPacket } from "mysql2";

export interface Book extends RowDataPacket {
    id: number;
    title: string;
    edition: string;
    status: string;
    publicationDate: Date;
    publisher: string;
    authorId: number;
}
export interface Author extends RowDataPacket {
    id: number;
    name: string;
    birthdate: Date;
    deathdate?: Date;
}
export interface User extends RowDataPacket {
    id: number;
    name: string;
    email: string;
    password: string;
    role: EUserRole;
}
export enum EUserRole {
    CUSTOMER = "customer",
    EMPLOYEE = "employee"
}
export interface Loan extends RowDataPacket {
    id: number;
    lendingDate: Date;
    expectedDate: Date;
    bookId: number;
    userId: number;
}

export interface Return extends RowDataPacket {
    id: number;
    returnDate: Date;
    loanId: number;
}
export interface Penalty extends RowDataPacket {
    id: number;
    value: number;
    paid: boolean;
    loanId: number;
}



