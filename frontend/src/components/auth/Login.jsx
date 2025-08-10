import { useState } from "react"
import google from '../../assets/icons8-google-logo-32.png';
import apple from '../../assets/icons8-apple-32.png';
import axios from 'axios';
import { url } from "../../constant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userdetails } from "../../store/UserSlice";
const Login = () => {
  const navigation = useNavigate();
  const [flag,setflag] = useState(true);
  const [firstname,setfirstname] = useState('');
  const [lastname,setlastname] = useState('');
  const [email,setemail] = useState('admin@gmail.com');
  const [password,setpassword] = useState('admin123');
  const dispatch = useDispatch();
  const handlesignIn = async (e)=>{
    e.preventDefault();
   const dataofuser = await axios.post(url+'/signin',{
      email,
      password
    },{
      withCredentials:true,
    })

    dispatch(userdetails(dataofuser.data.data))
    navigation('/');
  }

  const handlesignUp = async (e)=>{
    e.preventDefault();
    await axios.post(url+'/signup',{
      firstname,
      lastname,
      email,
      password
    },{
      withCredentials:true,
    })
  }

  return (
    <div className="min-h-screen   flex  justify-center  relative">
  <div className="relative h-fit  rounded-2xl shadow-xl w-full max-w-md mx-auto p-8 sm:p-10 xl:h-[50%] border border-neutral-800 text-white">
    <div className="flex justify-between items-center mb-8">
      <span className="text-xl font-bold ">Create an Account</span>
    </div>
    <div className="flex items-center  rounded-full mb-8 overflow-hidden w-full gap-2">
      <button className={`flex-1 py-2 text-sm  rounded-full transition-all active:scale-95 ${!flag?'bg-neutral-500':''}`} onClick={()=>setflag(false)}>Sign up</button>
      <button className={`flex-1 py-2 text-sm rounded-full active:scale-95 ${flag?'bg-neutral-500':''} ` }onClick={()=>setflag(true)}>Sign in </button>
    </div>
    <form className="flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row gap-3">
       {!flag && <input
          type="text"
          placeholder="First name"
          className="flex-1 py-2 px-2 rounded bg-[#242529] border border-transparent focus:border-[#32323c] outline-none transition text-sm"
          onInput={(e)=>setfirstname(e.target.value)}
        />}
       {!flag && <input
          type="text"
          placeholder="Last name"
          className="flex-1 py-2 px-2 rounded bg-[#242529] border border-transparent focus:border-[#32323c] outline-none transition text-sm"
          onInput={(e)=>setlastname(e.target.value)}
        />}
      </div>
      <input
        type="email"
        placeholder="Enter your email"
        className="py-2 px-4 rounded bg-[#242529] border border-transparent focus:border-[#32323c] outline-none transition text-sm"
        onInput={(e)=>setemail(e.target.value)}
      />
     
      <input type="password" placeholder="Password"  className="py-2 px-4 rounded bg-[#242529] border border-transparent focus:border-[#32323c] outline-none transition text-sm" 
      onInput={(e)=>setpassword(e.target.value)} />
      <button
        type="submit"
        className="mt-2 mb-4 w-full py-2 rounded bg-gradient-to-r from-white to-gray-200 text-black font-semibold text-sm shadow hover:from-gray-200 hover:to-white transition"
        onClick={flag?handlesignIn:handlesignUp}
      >
        Create an account
      </button>
    </form>
    <div className="flex gap-4 mb-6">
      <button className="flex-1 bg-[#212326] py-3 rounded-lg flex justify-center items-center">
        <img src={google} alt=""  />
      </button>
      <button className="flex-1 bg-[#212326] py-3 rounded-lg flex justify-center items-center">
        <img src={apple} alt="" />
      </button>
    </div>
    <div className="text-xs text-gray-400 text-center">
      By creating an account, you agree to our <span className="underline">Terms &amp; Service</span>
    </div>
  </div>
</div>

  )
}
export default Login