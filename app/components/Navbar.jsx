import React from 'react'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <div className='flex items-center p-5 justify-between shadow-lg md:px-24  sticky top-0 backdrop-filter backdrop-blur-xl bg-opacity-30  bg-blue-50 w-full '>

      <a href='/' className='font-bold text-5xl text-blue-600'>
        <img src="/logo.svg" className=' max-w-[150px] md:max-w-[180px]' alt="" />
      </a>

      <div className='hidden text-lg md:flex gap-8 text-blue-600 '>
        <a href="#collection" className='opacity-80  hover:text-blue-800 hover:opacity-100 transition-all duration-300'>Collection</a>
       
      </div>
      <div className='block md:hidden'>
        <MobileNav/>
      </div>
    </div>
  )
}

export default Navbar
