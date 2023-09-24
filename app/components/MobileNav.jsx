'use client'
import React,{useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'



const MobileNav = () => {
    const [open,setOpen]=useState(false)
  return (
    <div onClick={()=>setOpen(!open)} className='text-3xl text-blue-700 cursor-pointer'>


        {!open ?<GiHamburgerMenu/> : <AiOutlineClose/>}

        <div className={` ${open?'flex shadow-lg absolute p-5 px-10 flex-col gap-4 right-0 m-2   text-[18px] bg-white': 'hidden'}`}>
        <div className='absolute bg-white h-6 w-6 -top-1 right-0 mx-4 rotate-[42deg]  '/>
           <a  href="#collection">Collection</a>
           
        </div>
        
      
    </div>
  )
}

export default MobileNav
