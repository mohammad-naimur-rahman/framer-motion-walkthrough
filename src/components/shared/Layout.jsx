import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <main className='layout'>
      <Nav />
      <Outlet />
    </main>
  )
}

export default Layout
