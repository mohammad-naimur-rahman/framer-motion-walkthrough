import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const Layout = () => {
  return (
    <main className='layout'>
      <Nav />
      <section className='mt-16'>
        <Outlet />
      </section>
    </main>
  )
}

export default Layout
