import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'

const router = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
  ])
}
export default router
