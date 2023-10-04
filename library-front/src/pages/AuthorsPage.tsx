import { useAuthors } from "../hooks/useAuthors"
import { DeleteModal } from "../components/DeleteModal";
import { useState } from "react";
import { ErrorModal } from "../components/ErrorModal";
import PrimaryButton from "../components/PrimaryButton";
import { Author } from "../Types";

interface postAuthor {
  name: string;
  birthdate: Date;
  deathdate?: Date;
}


export const AuthorsPage = () => {
  const { authors, deleteAuthorById, saveNewAuthor, error, setError, editAuthor } = useAuthors();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAuthorId, setSelectedAuthorId] = useState<number | null>(null);
  const [newAuthor, setNewAuthor] = useState<postAuthor>({
    name: '',
    birthdate: new Date()
  });
  const [authorToEdit, setAuthorToEdit] = useState<Author | null>(null);

  const handleDelete = (id: number) => {
    setShowDeleteModal(true);
    setSelectedAuthorId(id);
  }

  console.log(authorToEdit)

  return (
    <div className="grid grid-cols-2 h-full m-4">
      <ErrorModal
        isOpen={!!error}
        onClose={() => setError(null)}
        message={error!}
        title="Erro"
      />
      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onDelete={() => {
          deleteAuthorById(selectedAuthorId!)
          setShowDeleteModal(false)
        }}
        message="Tem certeza que deseja excluir este autor?"
        title="Excluir Autor"
      />
      <div id="create-author-section" className="py-2 px-6">
        <h1 className="text-2xl font-bold mb-2">Criar Autor</h1>
        <div className="bg-white rounded px-8 pt-6 pb-8 mb-4">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nome
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                id="name"
                type="text"
                placeholder="Nome"
                value={newAuthor.name}
                onChange={e => setNewAuthor({ ...newAuthor, name: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthdate">
                Data de Nascimento
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                id="birthdate"
                type="date"
                value={newAuthor.birthdate.toISOString().substr(0, 10) || ''}
                onChange={(e) => setNewAuthor({ ...newAuthor, birthdate: e.target.value ? new Date(e.target.value) : new Date() })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deathdate">
                Data de Morte
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                id="deathdate"
                type="date"
                value={newAuthor.deathdate?.toISOString().substr(0, 10) || ''}
                onChange={e =>
                  setNewAuthor({ ...newAuthor, deathdate: e.target.value ? new Date(e.target.value) : undefined })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <PrimaryButton
                onClick={() => {
                  saveNewAuthor(newAuthor.name, newAuthor.birthdate!, newAuthor.deathdate)
                  setNewAuthor({ name: '', birthdate: new Date() });
                }}
                text="Criar Autor"
              />
            </div>
          </form>
        </div>

        {authorToEdit && (
          <>
            <h1 className="text-2xl font-bold mb-2">Editar Autor</h1>
            <div className="bg-white rounded px-8 pt-6 pb-8 mb-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nome
                </label>

                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                  id="name"
                  type="text"
                  placeholder="Nome"
                  value={authorToEdit.name}
                  onChange={e => setAuthorToEdit({ ...authorToEdit, name: e.target.value })}
                />

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthdate">
                  Data de Nascimento
                </label>

                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                  id="birthdate"
                  type="date"
                  value={new Date(authorToEdit.birthdate!).toISOString().substr(0, 10) || ''}
                  onChange={(e) => setAuthorToEdit({ ...authorToEdit, birthdate: e.target.value ? new Date(e.target.value) : new Date(), })}
                />


                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deathdate">
                  Data de Morte
                </label>

                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                  id="deathdate"
                  type="date"
                  value={authorToEdit.deathdate?.toISOString().substr(0, 10) || ''}
                  onChange={e =>
                    setAuthorToEdit({ ...authorToEdit, deathdate: e.target.value ? new Date(e.target.value) : undefined })
                  }
                />


                <div className="flex items-center justify-between">
                  <PrimaryButton onClick={() => setAuthorToEdit(null)} text="Cancelar" />
                  <PrimaryButton onClick={() => editAuthor(authorToEdit)} text="Salvar" />
                </div>

              </div>
            </div>
          </>
        )}



      </div>
      <div className="py-2 px-6">
        <h1 className="text-2xl font-bold mb-2">Autores</h1>
        <div className="bg-white rounded px-4 py-4 mb-4">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Nome</th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Data Nascimento</th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Data Morte</th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
              </tr>
            </thead>
            <tbody>
              {
                authors.map(author => (
                  <tr key={author.id} className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800">
                    <td className="border px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{author.id}</td>
                    <td className="border px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{author.name}</td>
                    <td className="border px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{new Date(author.birthdate).toLocaleDateString()}</td>
                    <td className="border px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{author.deathdate ? new Date(author.deathdate).toLocaleDateString() : '--'}</td>
                    <td className="border px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 flex justify-center">
                      {/* edit button */}
                      <button
                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={() => setAuthorToEdit(author)}
                      >
                        Editar
                      </button>

                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleDelete(author.id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
