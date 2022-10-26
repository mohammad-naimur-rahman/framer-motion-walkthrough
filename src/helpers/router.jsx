import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Layout from '../components/shared/Layout'
import Homepage from '../pages/Homepage'
import LayoutPage from '../pages/LayoutPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/layout',
        element: <LayoutPage />,
      },
    ],
  },
])

export default router
