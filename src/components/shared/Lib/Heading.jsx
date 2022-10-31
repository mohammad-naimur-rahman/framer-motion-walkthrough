import React from 'react'

const Heading = ({ children, containerClassName = '', className = '' }) => {
  return (
    <div className={`w-full text-center pt-10 mb-5 ${containerClassName}`}>
      <h3 className={`pb-2 px-2 border-b-2 inline-block mx-auto text-center text-3xl ${className}`}>{children}</h3>
    </div>
  )
}

export default Heading
