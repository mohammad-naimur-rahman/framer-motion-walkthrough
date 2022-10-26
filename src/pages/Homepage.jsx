import React from 'react'

const Homepage = () => {
  return (
    <div className='flex items-center justify-center h-layout'>
      <div className='grid items-center text-center homepage-card max-w-[800px] rounded-lg p-10 shadow-xl'>
        <h3 className='text-5xl font-hand'>Welcome to Framer motion walktrough</h3>
        <h4 className='text-xl pt-4 pb-5 italic font-thin'>
          You can use it as a framer motion cheat sheet or guide (The Codebase)
        </h4>
        <p className='text-6xl font-light'>Peace ✌️</p>
      </div>
    </div>
  )
}

export default Homepage
