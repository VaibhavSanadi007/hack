import { useEffect, useState } from 'react'
import { useLenis } from 'lenis/react';
const Shimmer = () => {
  const arr = new Array(9).fill(0);
  const lenis = useLenis();

 
 useEffect(()=>{
    lenis?.scrollTo(0);
  },[])
  return (
    <>
    <div className=' h-fit xl:px-50 md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 xl:grid-cols-3'>
      {
      
        arr.map((items,index)=>(

          <div key={index} className='w-full h-70 animate-pulse bg-neutral-900 flex flex-col items-center   justify-center gap-1 py-2 hover:border cursor-pointer  border border-neutral-900 p-5 rounded xl:gap-3 ' >
          <div className=' '>loading...</div>
          </div>
        ))
        
   
      }
    </div>
    </>
  )
}
export default Shimmer