import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import LoginPage from './pages/LoginPage.tsx'
import Home from './pages/Home.tsx'
import Board from './components/Board.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/board',
    element: <Board />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
