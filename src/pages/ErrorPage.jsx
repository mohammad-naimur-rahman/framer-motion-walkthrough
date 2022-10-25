import { useRouteError } from 'react-router-dom'

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
    </div>
  )
}
