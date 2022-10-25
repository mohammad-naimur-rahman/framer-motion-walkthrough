import React from 'react'
import { Link } from 'react-router-dom'
import links from '../../data/nav.json'

const Nav = () => {
  return (
    <nav className='flex items-center justify-between px-5 py-3 bg-blue-400'>
      <h2 className='text-3xl'>Framer Motion</h2>
      <ul className='flex'>
        {links.map(({ id, link, name }) => (
          <li key={id} className='text-slate-100 mx-3 hover:underline'>
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
