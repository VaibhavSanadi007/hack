import Transition from '../Transition/Transition.jsx'
import BasicRating from '../Rating/BasicRating.jsx'
import NativeSelectDemo from '../Select/NativeSelectDemo.jsx'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
const Keyboard = () => {
  const [value,setvalue] = useState(null);
  const Navigate = useNavigate();
  
  const getKeyboarddata = async ()=>{
    const data = await axios.get('https://ecom-2jj8.onrender.com/keyOverall');
    setvalue(data.data);
    console.log(data.data);
  }

  useEffect(()=>{
    getKeyboarddata();
  },[])

  const handlekeynav = (id)=>{
    Navigate(`/keydetail/${id}`)

  }

  return (
    <>
        <nav className=''>
          <NativeSelectDemo />
        </nav>
        <div className='xl:px-50 md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 xl:grid-cols-3'>
          {
           value && value.map((items,index)=>(
    
              <div key={index} className='w-full flex flex-col items-center justify-center gap-1 py-2 hover:border cursor-pointer active:scale-105 border border-neutral-900 p-5 rounded xl:gap-3 ' onClick={()=>handlekeynav(items._id)}>
                <img className='rounded w-full xl:h-[70%] object-cover' src={items.keyboardImg1} />
                <BasicRating/>
                <h1 className='w-full text-center '>{items.KeyboardEventname}</h1>
                <h1 className='w-full text-center text-neutral-500 text-sm'>&#8377;{items.minPay}</h1>
              </div>
            
            ))
          }
        </div>
        </>
  )
}
export default Transition(Keyboard)
