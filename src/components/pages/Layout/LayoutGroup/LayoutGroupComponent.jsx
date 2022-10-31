import React from 'react'
import { LayoutGroup } from 'framer-motion'
import Accordion from './Accordion'
import Heading from '../../../shared/Lib/Heading'

const LayoutGroupComponent = () => {
  return (
    <>
      <Heading>Layout Group</Heading>
      <LayoutGroup>
        <Accordion />
        <Accordion />
        <Accordion />
      </LayoutGroup>
    </>
  )
}

export default LayoutGroupComponent
