
export interface Book {
    id: number;
    title: string;
    edition: string;
    status: string;
    publicationDate: Date;
    publisher: string;
    authorId: number;
}
export interface Author {
    id: number;
    name: string;
    birthdate: Date;
    deathdate?: Date;
}
export interface User {
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
export interface Loan {
    id: number;
    lendingDate: Date;
    expectedDate: Date;
    bookId: number;
    userId: number;
}

export interface Return {
    id: number;
    returnDate: Date;
    loanId: number;
}
export interface Penalty {
    id: number;
    value: number;
    paid: boolean;
    loanId: number;
}



