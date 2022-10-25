import { Link, useRouteError } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className='w-full h-screen bg-red-500 text-white flex justify-center items-center flex-col'>
      <h1 className='text-4xl mb-5'>Oopps!</h1>
      <p className='text-2xl mb-2'>Sorry, an unexpected error has occurred.</p>
      <p className='text-xl'>
        <i>{error.statusText || error.message}</i>
      </p>

      <motion.button
        className='bg-green-600 pt-1 pb-2 px-6 rounded-md mt-8 transition-all shadow-md'
        whileHover={{
          scale: [1, 1.1, 1, 1.1, 1],
          transition: {
            duration: 0.1,
            repeat: 3,
            repeatType: 'loop',
          },
        }}>
        <Link to='/'>
          <span className='text-xl'>&larr;</span>
          <span className='pl-3'>Go Home</span>
        </Link>
      </motion.button>
    </div>
  )
}
