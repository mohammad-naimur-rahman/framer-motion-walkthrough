import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Accordion = () => {
  const [open, setopen] = useState(false)
  return (
    <motion.div
      layout
      className={`bg-teal-500 overflow-hidden py-3 rounded-md shadow-md my-3 mx-auto w-96 ${open ? 'h-auto' : 'h-16'}`}>
      <motion.h4 layout className='text-3xl pb-4 border-b-2 flex cursor-pointer px-6' onClick={() => setopen(!open)}>
        Accordion Header{' '}
        {open ? <span className='ml-auto block pr-5'>&uarr;</span> : <span className='ml-auto block pr-5'>&darr;</span>}
      </motion.h4>
      <motion.p layout className='p-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In laborum ab itaque. Voluptate reprehenderit, voluptas
        dolorem facere deleniti nisi numquam?
      </motion.p>
    </motion.div>
  )
}

export default Accordion
