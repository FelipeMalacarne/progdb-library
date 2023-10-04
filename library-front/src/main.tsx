import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './reset.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage.tsx'
import { AuthenticatedLayout } from './layouts/AuthenticatedLayout.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx'
import { RegisterPage } from './pages/RegisterPage.tsx'
import { AuthorsPage } from './pages/AuthorsPage.tsx'
import { BooksPage } from './pages/BooksPage.tsx'

const router = createBrowserRouter([
  {
    //not found
    path: '*',
    element: <NotFoundPage/>,
  },
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'entrar',
        element: <LoginPage/>,
      },
      {
        path: 'registrar',
        element: <RegisterPage/>,
      },
      {
        path: 'auth',
        element: <AuthenticatedLayout/>,
        children: [
          {
            path: 'autores',
            element: <AuthorsPage/>
          },
          {
            path: 'livros',
            element: <BooksPage/>
          },
          {
            path: 'editoras',
            element: <div>editoras</div>
          },
          {
            path: 'usuarios',
            element: <div>usuarios</div>
          }
        ]
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
