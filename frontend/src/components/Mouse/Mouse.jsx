import Transition from '../Transition/Transition.jsx'
import BasicRating from '../Rating/BasicRating.jsx'
import NativeSelectDemo from '../Select/NativeSelectDemo.jsx'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
const Mouse = () => {
  const [value,setvalue] = useState(null);
  const Navigate = useNavigate();

  const handlemousenav = (id)=>{
    Navigate(`/mousedetail/${id}`)
  }

  const getMousedata = async ()=>{
    const data = await axios.get('https://ecom-2jj8.onrender.com/mouseOverall');
    setvalue(data.data);
  }

  useEffect(()=>{
    getMousedata();
  },[])

  return (
    <>
    <nav className=''>
      <NativeSelectDemo />
    </nav>
    <div className='xl:px-50 md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 xl:grid-cols-3'>
      {
       value && value.map((items,index)=>(

          <div key={index} className='w-full flex flex-col items-center justify-center gap-1 py-2 hover:border cursor-pointer active:scale-105 border border-neutral-900 p-5 rounded xl:gap-3 ' onClick={()=>handlemousenav(items._id)}>
            <img className='rounded w-full xl:h-[70%] object-cover' src={items.mouseImg1} />
            <BasicRating/>
            <h1 className='w-full text-center '>{items.mousename}</h1>
            <h1 className='w-full text-center text-neutral-500 text-sm'>&#8377;{items.minPay}</h1>
          </div>
        
        ))
      }
    </div>
    </>
  )
}
export default Transition(Mouse)
