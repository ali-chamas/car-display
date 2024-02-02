import React from 'react'

import HeroCar from '../components/HeroCar'


const Hero = () => {
  return (
    <div className=' h-screen md:-mt-10  flex  flex-col items-center  justify-evenly md:flex-row md:justify-between  '>

            <div className='p-10 text-center flex flex-col gap-5 items-center'>
              <h1 className='text-4xl lg:text-7xl xl:text-8xl font-bold'>The Best <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-900 font-extrabold'>Car Display</span>
              <br /> 
              Website</h1>
          <a  href='#collection'  className='bg-gradient-to-r from-blue-400 to-blue-700 p-3 px-10 text-white text-lg md:text-xl rounded-full hover:opacity-90 hover:bg-gradient-to-tr transition-all duration-500'>View Collection</a>

            </div>

          <HeroCar/>

     </div>
  )
}

export default Hero
