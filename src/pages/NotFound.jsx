import React from 'react'
import { useNavigate } from 'react-router-dom'


const NotFound = () => {
  const navigate=useNavigate()

  return (
    <>
      
    <main className="grid min-h-full h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-9xl font-semibold text-indigo-600 flex justify-center text-center">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-grey-900 sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
          onClick={()=>navigate(-1)}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go Back Home
          </button>
        </div>
      </div>
    </main>
  </>
  )
}

export default NotFound
