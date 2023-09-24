'use client'
import React, { useState } from 'react'
import CarInfo from './CarInfo'

const  CarCards = ({cars}) => {
    const [show,setShow]=useState(false)
    const [car,setCar]=useState()

    const [type,setType]=useState('any')
    const [searchCar,setSearchCar]=useState('')
  const [error,setError]=useState(false)
    
    
  return (
<>
    
    
    <div className='bg-gray-200 bg-opacity-50 p-4 flex flex-col items-center gap-5 rounded-xl mx-4 max-w-[300px] md:max-w-max'>
    <div className=' flex flex-col md:flex-row items-center gap-5'>
      <div className='flex flex-col gap-2 items-center'>
        <label >vehicle type</label>
            <select  className='p-2 px-4 outline-none' onChange={(e)=>setType(e.target.value)}>
              <option value="any">Any</option>
                <option  value="CAR" className='p-2' >Car</option>
                <option value="SUV" >Suv</option>
            </select>
      </div>
      <div className='bg-white  rounded-full'><input type="search"className='p-2 outline-none bg-transparent placeholder:px-2' placeholder='search for your brand' onChange={(e)=>setSearchCar(e.target.value)}/></div>
      
    </div>
    
    </div>
    <div className='  p-5 grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>


          {cars.filter((val)=>{
            if(val.type == type || type==='any'){
              if(searchCar=='') return val
            else if(val.brand.toLowerCase().includes(searchCar.toLowerCase())){
              return val
            }
            }
            
            
          }).map(car=>(

            
            
              <div key={car._id} className='p-5 flex flex-col items-center gap-4 border bg-gradient-to-r from-white to-blue-50 max-w-[400px] '>
                
                <div className='min-h-[180px]'><img src={car.image}  className='max-w-[200px] xl:max-w-[300px] '  alt="" /></div>
              
              <h1 className=' text-3xl font-bold'>{car.brand}</h1>
              <p className='text-blue-800' >{car.model}</p>
              <p className='text-center '>{car.description} </p>
              <button className='bg-gradient-to-r from-blue-400 to-blue-700 p-3 px-6 text-white text-lg md:text-xl rounded-full hover:opacity-90 hover:bg-gradient-to-tr transition-all duration-500' onClick={()=>{setShow(true);setCar(car)}}>More Details</button>
              
                  </div>
                  

          ))}
                
                
                {show && <CarInfo setShow={setShow} car={car}/>}
                
                

        </div>
        </>
  )
}

export default CarCards
