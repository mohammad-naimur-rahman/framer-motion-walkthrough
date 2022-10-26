import React, { useState } from 'react'
import { motion } from 'framer-motion'

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
      <h3 className='heading'>Layout on flex justify-content change</h3>
      <div className='switch' data-isOn={isOn} onClick={toggleSwitch}>
        <motion.div className='handle' layout transition={spring} />
      </div>
    </div>
  )
}

export default Flex
