import { useEffect, useState } from "react"
import { Book } from "../Types"


export const useBooks = () => {

    const [books, setBooks] = useState<Book[]>([])
    const [error, setError] = useState<string | null>(null);

    const fetchBooks = async () => {
        const url = 'http://localhost:8000/api/books';
        const response = await fetch(url);
        if (!response.ok) {
            setError('Não foi possível carregar os livros');
            return;
        }
        const data = await response.json();
        setBooks(data);
    }

    const deleteBookById = async (id: number) => {
        const url = `http://localhost:8000/api/books/${id}`;
        const response = await fetch(url, {
            method: 'DELETE',
        });
        if (!response.ok) {
            setError('Não foi possível excluir o livro');
            return;
        }
        setError(null);
        fetchBooks(); 
    }

    useEffect(() => {
        fetchBooks()

    }, [])

    return { books, error, fetchBooks, deleteBookById}
}