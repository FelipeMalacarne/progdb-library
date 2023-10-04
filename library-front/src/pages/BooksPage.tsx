import React from 'react'
import { useBooks } from '../hooks/useBooks'
import { useAuthors } from '../hooks/useAuthors';

export const BooksPage = () => {
    const { books, error, deleteBookById } = useBooks();
    const { authors } = useAuthors();
    console.log(books)
    console.log(authors)

    // export interface Book {
    //     id: number;
    //     title: string;
    //     edition: string;
    //     status: string;
    //     publicationDate: Date;
    //     publisher: string;
    //     authorId: number;
    // }

  return (
    <div className="h-full m-4">
        <div className="py-2 px-6">
            <h1 className="text-2xl font-bold mb-2">Autores</h1>
            <div className="bg-white rounded px-4 py-4 mb-4">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                <tr>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    ID
                    </th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                     Titulo
                    </th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Edição
                    </th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Status
                    </th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Data Publicação
                    </th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Editora
                    </th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Autor
                    </th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Ações
                    </th>
                </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id} className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800">
                            <td className="border px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                {book.id}
                            </td>
                            <td className="border px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                {book.title}
                            </td>
                            <td className="border px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                {book.edition}
                            </td>
                            <td className="border px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                {book.status}
                            </td>
                            <td className="border px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                {new Date(book.publication_date).toLocaleDateString()}
                            </td>
                            <td className="border px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                {book.publisher}
                            </td>
                            <td className="border px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                {authors.find((author) => author.id === book.author_id)?.name}
                            </td>
                            <td className="border px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 flex justify-center">
                                {/* edit button */}
                                {/* <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mr-2">
                                    Editar
                                </button> */}
                                {/* delete button */}
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => deleteBookById(book.id)}
                                >
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

        </div>
           
    </div>
  )
}
