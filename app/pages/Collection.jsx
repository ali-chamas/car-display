import React from 'react'
import CarsDisplay from '../components/CarsDisplay'

const Collection = () => {
  return (
    <div id='collection' className='h-full flex flex-col items-center pt-40 md:pt-0 lg:pt-10 '>

      <h1 className='text-4xl lg:text-5xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800'>Our Collection</h1>
      
      
      <CarsDisplay/>
    </div>
  )
}

export default Collection
