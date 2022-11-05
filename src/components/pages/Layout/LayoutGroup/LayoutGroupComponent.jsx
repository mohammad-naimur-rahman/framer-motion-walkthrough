import React from 'react'
import { LayoutGroup } from 'framer-motion'
import Accordion from './Accordion'
import Heading from '../../../shared/Lib/Heading'

const LayoutGroupComponent = () => {
  return (
    <>
      <Heading>Layout Group</Heading>
      <LayoutGroup>
        <Accordion index={1} />
        <Accordion index={2} />
        <Accordion index={3} />
      </LayoutGroup>
    </>
  )
}

export default LayoutGroupComponent
