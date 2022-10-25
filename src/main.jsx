import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import { RouterProvider } from 'react-router-dom'
import router from './helpers/router'
import Layout from './components/shared/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
)
