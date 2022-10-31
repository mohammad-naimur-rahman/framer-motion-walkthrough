import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Heading from '../../shared/Lib/Heading'

const PinkDot = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='pink-dot h-[400px] flex flex-col justify-center items-center'>
      <Heading containerClassName='self-start'>Pink Dot</Heading>
      <motion.div
        layout
        data-isopen={isOpen}
        initial={{ borderRadius: 50 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className='parent'
        onClick={() => setIsOpen(!isOpen)}>
        <motion.div
          layout // To fix some animation issue, give layout props in the children too, try commenting this layout and see the difference
          className='child cursor-pointer'
        />
      </motion.div>
    </div>
  )
}

export default PinkDot
