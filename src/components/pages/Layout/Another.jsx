import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Heading from '../../shared/Lib/Heading'

const Another = () => {
  const [big, setbig] = useState(false)
  return (
    <>
      <Heading>Another Example</Heading>
      <motion.div
        layout
        className={`${big ? 'h-96' : 'h-72'} bg-teal-300 w-96 rounded grid items-center cursor-pointer mb-5 mx-auto`}
        onClick={() => setbig(!big)}>
        <h3 className='text-3xl text-center'>(Click Me)</h3>
      </motion.div>
    </>
  )
}

export default Another
