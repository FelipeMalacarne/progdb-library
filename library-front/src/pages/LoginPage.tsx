import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PrimaryButton from '../components/PrimaryButton';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ErrorBox from '../components/ErrorBox';

interface LoginBody {
  email: string;
  password: string;
}

export const LoginPage = () => {

  const nav = useNavigate();
  const [body, setBody] = useState<LoginBody>({
    email: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    const url = 'http://localhost:8000/api/auth/login';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message);
      return;
    }

    setError(null);
    localStorage.setItem('user', JSON.stringify(data));
    nav('/auth');
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
          <ImportContactsIcon className='text-indigo-600' sx={{ fontSize: 80 }} />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  onChange={(e) => setBody({ ...body, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  onChange={(e) => setBody({ ...body, password: e.target.value })}
                />
              </div>
            </div>
            {error && <ErrorBox error={error} />}
            <div>
              <PrimaryButton text='Entrar' onClick={handleLogin} />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
