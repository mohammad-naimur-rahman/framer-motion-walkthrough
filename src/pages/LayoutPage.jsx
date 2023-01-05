import React from 'react'
import Another from '../components/pages/Layout/Another'
import Flex from '../components/pages/Layout/Flex'
import LayoutGroupComponent from '../components/pages/Layout/LayoutGroup/LayoutGroupComponent'
import OverflowScroll from '../components/pages/Layout/OverflowScroll'
import PinkDot from '../components/pages/Layout/PinkDot'
import Tab from '../components/pages/Tab'

const LayoutPage = () => {
  return (
    <>
      <Flex />
      <Another />
      <PinkDot />
      <OverflowScroll />
      <LayoutGroupComponent />
      <Tab />
    </>
  )
}

export default LayoutPage
