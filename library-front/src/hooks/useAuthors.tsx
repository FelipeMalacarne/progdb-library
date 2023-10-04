import { useEffect, useState } from "react"
import { Author } from "../Types"

export const useAuthors = () => {
    const [authors, setAuthors] = useState<Author[]>([])
    const [error, setError] = useState<string | null>(null);

    const fetchAuthors = async () => {
        const url = 'http://localhost:8000/api/authors';
        const response = await fetch(url);
        if (!response.ok) {
            setError('Não foi possível carregar os autores');
            return;
        }
        const data = await response.json();
        setAuthors(data);
    }

    const saveNewAuthor = async ( name: string, birthdate: Date, deathdate?: Date) => {
        const url = 'http://localhost:8000/api/authors';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, birthdate, deathdate }),
        });
        if (!response.ok) {
            setError('Não foi possível salvar o autor');
            return;
        }
        setError(null);
        fetchAuthors();
    }

    const editAuthor = async (author: Author) => {
        const { id, name, birthdate, deathdate } = author;
        const url = `http://localhost:8000/api/authors/${id}`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, birthdate, deathdate }),
        });
        if (!response.ok) {
            setError('Não foi possível editar o autor');
            return;
        }
        setError(null);
        fetchAuthors();
    }

    const deleteAuthorById = async (id: number) => {
        const url = `http://localhost:8000/api/authors/${id}`;
        const response = await fetch(url, {
            method: 'DELETE',
        });
        if (!response.ok) {
            setError('Não foi possível excluir o autor pois já possui livros cadastrados');
            return;
        }
        setError(null);
        fetchAuthors();
    }

    useEffect(() => {
        fetchAuthors();
    }, [])  
  
 return { authors, deleteAuthorById, saveNewAuthor, error, setError, editAuthor }
}