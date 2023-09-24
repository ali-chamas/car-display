'use client'
import React from 'react'
import {motion as m} from 'framer-motion'
const HeroCar = () => {
  return (
    <div className=' flex flex-col max-w-[500px] lg:max-w-[700px] ' >


            
            
            <m.img animate={{x:0,y:0}} initial={{x:800 ,y:-30}} transition={{type:'spring',stiffness:40,delay:0}} className='' src="/hero.png" alt="" />
            <div className='absolute -z-10 max-w-[500px] lg:max-w-[700px]'><img src="/hero-bg.png" alt="" /></div>
          </div>
  )
}

export default HeroCar
