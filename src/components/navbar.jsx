import React from 'react'

const Navbar = () => {
  return (
    <div>
      <h1 className='text-4xl italic text-gray-500 mt-7 text-center pb-5'>Bikalpa Coder Community</h1>
      <ul className='capitalize flex justify-around cursor-pointer  mt-3'>
        <li className='hover:underline'>home</li>
        <li className='hover:underline'>about us</li>
        <li className='hover:underline'>contact us</li>
        <li className='hover:underline'>login</li>
      </ul>
    </div>
  )
}

export {Navbar}
