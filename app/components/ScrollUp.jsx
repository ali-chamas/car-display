import React from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'
import {motion as m} from 'framer-motion'
const ScrollUp = () => {
  return (
    <m.div 
    whileInView={{y:[0,15,0],transition:{duration:1,ease:'easeInOut',repeat:Infinity}}} 
    className='fixed bottom-0 right-0 m-8 bg-blue-400 p-2 rounded-full shadow-xl'>
      <a href="#collection" className='text-3xl text-white '><AiOutlineArrowUp/></a>
    </m.div>
  )
}

export default ScrollUp
