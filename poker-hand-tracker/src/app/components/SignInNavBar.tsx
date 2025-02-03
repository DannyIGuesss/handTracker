import React from 'react'
import Link from 'next/link'

export const SignInNavBar = () => {
  return (
    <>
      <nav className="bg-red-600 flex justify-between items-center p-4 text-white ">
        <div className="text-xl font-bold">Hand Tracker</div>
        <div className="flex gap-4">
          <Link href="/signUp">
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Sign Up
            </button>
          </Link>
          <Link href='/signIn'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Sign In
            </button>
          </Link>
        </div>
      </nav>
    </>
  )
}
