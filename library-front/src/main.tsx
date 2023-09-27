import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage.tsx'
import { AuthenticatedLayout } from './layouts/AuthenticatedLayout.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'login',
        element: <LoginPage/>,
      },
      {
        path: '/auth',
        element: <AuthenticatedLayout/>,
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
