import React from 'react'

import {AiOutlineClose} from 'react-icons/ai'
const CarInfo = ({setShow,car}) => {
  
  return (
    <div className='fixed top-0 left-0 h-screen  w-full bg-slate-700 bg-opacity-40 flex items-center justify-center '>

        <div className='bg-white max-w-[400px] h-auto p-5 opacity-100  rounded-lg shadow-lg'>
            <div className='relative top-0 left-0 cursor-pointer text-xl' onClick={()=>setShow(false)}><AiOutlineClose/></div>
                <div className='flex flex-col gap-4 items-center'>
                    <img src={car.image} alt="" />
                    <h1>name: <span className='font-extrabold text-xl'>{car.brand}</span></h1>
                    <p>model: <span className='font-bold'>{car.model}</span></p>
                    <p>year : <span className='font-bold'>{car.year}</span></p>
                    <p>serial number : <span className='font-bold'>{car.serialNumber}</span></p>
                    <p>type : <span className='font-bold'>{car.type}</span></p>
                </div>
        </div>
      
    </div>
  )
}

export default CarInfo
