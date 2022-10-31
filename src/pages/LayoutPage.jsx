import React from 'react'
import Another from '../components/pages/Layout/Another'
import Flex from '../components/pages/Layout/Flex'
import OverflowScroll from '../components/pages/Layout/OverflowScroll'
import PinkDot from '../components/pages/Layout/PinkDot'

const LayoutPage = () => {
  return (
    <div>
      <Flex />
      <Another />
      <PinkDot />
      <OverflowScroll />
    </div>
  )
}

export default LayoutPage
