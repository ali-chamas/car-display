
import React from 'react'

import CarCards from './CarCards'

import { Cars } from '../cars'

const CarsDisplay = () => {

 
  const cars = Cars
  
  return (
    <div className='flex flex-col items-center gap-8 pt-[10%] md:pt-[5%]'>
        
        <CarCards cars={cars} />
    </div>
  )
}

export default CarsDisplay
