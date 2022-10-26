import React from 'react'

const Heading = ({ children }) => {
  return (
    <div className='w-full text-center pt-10 mb-5'>
      <h3 className='pb-2 px-2 border-b-2 inline-block mx-auto text-center text-3xl'>{children}</h3>
    </div>
  )
}

export default Heading
