import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Heading from '../../shared/Lib/Heading'

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}

const Flex = () => {
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => setIsOn(!isOn)

  return (
    <div>
      <Heading>Layout on flex justify-content change</Heading>
      <div className='switch' data-ison={isOn} onClick={toggleSwitch}>
        <motion.div className='handle' layout transition={spring} />
      </div>
    </div>
  )
}

export default Flex
