import { ImportContacts } from "@mui/icons-material"
import { User } from "../Types"
import { useNavigate } from "react-router-dom";

interface navbarProps {
  user: User | null;
}

export const Navbar: React.FC<navbarProps> = (props) => {
  const nav = useNavigate();
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center bg-indigo-600 px-6 py-4 shadow sm:px-20">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 justify-between items-center">
          <ImportContacts className='text-white' sx={{ fontSize: 32 }} />
          <h1 className="text-2xl font-bold text-white md:text-3xl">Biblioteca</h1>
        </div>
        <div className="md:hidden">
          <button type="button" className="block text-white hover:text-gray-700 focus:text-gray-700 focus:outline-none">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path className="hidden" fillRule="evenodd" clipRule="evenodd" d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:-mx-4 hidden md:block items-center justify-between">
        <button className="my-1 text-white bg-indigo-600 hover:bg-indigo-700 hover:text-indigo-200 md:mx-4 md:my-0">Home</button>
        <button className="my-1 text-white bg-indigo-600 hover:bg-indigo-700 hover:text-indigo-200 md:mx-4 md:my-0" 
        onClick={() => nav('/auth/autores')}
        >
          Autores</button>
        <button className="my-1 text-white bg-indigo-600 hover:bg-indigo-700 hover:text-indigo-200 md:mx-4 md:my-0">Contact</button>
        <button className="my-1 text-white bg-indigo-600 hover:bg-indigo-700 hover:text-indigo-200 md:mx-4 md:my-0" 
        onClick={() => {
          localStorage.removeItem('user');
          nav('/entrar');
        }}
        >
          Logout
        </button>
      </div>
      {
        props.user && (
          <div className="flex flex-col md:flex-row md:-mx-4 hidden md:block items-center justify-between">
            <div className="text-white md:mx-4 md:my-0">Olá, {props.user.name}</div>
          </div>
        )
      }

    </div>
  )

}
