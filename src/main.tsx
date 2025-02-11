import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'


import App from './App'
import Layout from './layouts/Layout'
import DashboardPage from './pages/index'
import SignIn from './pages/signIn.tsx'

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '/',
            Component: DashboardPage,
          },
        ],
      },
      {
        path: '/sign-in',
        Component: SignIn,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
