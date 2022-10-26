import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import links from '../../data/nav.json'
import { motion } from 'framer-motion'

const Nav = ({ ...rest }) => {
  const { pathname } = useLocation()
  return (
    <nav
      className='flex items-center justify-between px-5 py-3 fixed top-0 left-0 right-0 w-full h-16 home-nav'
      {...rest}>
      <motion.h2
        className='text-4xl nav-heading'
        initial={{
          x: '-100vw',
        }}
        animate={{
          x: 0,
          transition: {
            duration: 0.5,
            type: 'spring',
          },
        }}
        whileHover={{
          scale: [1, 1.1, 1],
          transition: {
            duration: 0.2,
            repeat: 1,
            repeatType: 'loop',
          },
        }}>
        <Link to='/'>Framer Motion</Link>
      </motion.h2>
      <ul className='flex'>
        {links.map(({ id, link, name }) => (
          <motion.li
            key={id}
            className={`text-slate-100 mx-2 px-1 hover:border-b ${pathname === link ? 'border-b' : ''}`}
            whileHover={{ scale: 1.1 }}>
            <Link to={link}>{name}</Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
