import { useState } from "react"
import google from '../../assets/icons8-google-logo-32.png';
import apple from '../../assets/icons8-apple-32.png';
const Login = () => {
  const [flag,setflag] = useState(true);
  return (
    <div className="min-h-screen   flex  justify-center  relative">
  <div className="relative  rounded-2xl shadow-xl w-full max-w-md mx-auto p-8 sm:p-10 xl:h-[50%] border border-neutral-800 text-white">
    <div className="flex justify-between items-center mb-8">
      <span className="text-xl font-bold ">Create an Account</span>
    </div>
    <div className="flex items-center  rounded-full mb-8 overflow-hidden w-full">
      <button className="flex-1 py-2 text-sm  rounded-full transition-all active:scale-95" onClick={()=>setflag(false)}>Sign up</button>
      <button className="flex-1 py-2 text-sm active:scale-95" onClick={()=>setflag(true)}>Sign in </button>
    </div>
    <form className="flex flex-col gap-4">
      <div className="flex gap-3">
       {!flag && <input
          type="text"
          placeholder="First name"
          className="flex-1 py-2 px-2 rounded bg-[#242529] border border-transparent focus:border-[#32323c] outline-none transition text-sm"
        />}
       {!flag && <input
          type="text"
          placeholder="Last name"
          className="flex-1 py-2 px-2 rounded bg-[#242529] border border-transparent focus:border-[#32323c] outline-none transition text-sm"
        />}
      </div>
      <input
        type="email"
        placeholder="Enter your email"
        className="py-2 px-4 rounded bg-[#242529] border border-transparent focus:border-[#32323c] outline-none transition text-sm"
      />
     {!flag && <div className="flex items-center bg-[#242529] rounded px-3">
        <span className="mr-2 text-sm text-gray-300 flex items-center">
          <span className="w-5 h-5 flex items-center justify-center mr-1 rounded bg-[#1a1a21] text-xs">in</span>
        </span>
        <input
          type="tel"
          placeholder="+91"
          className="py-2 flex bg-transparent border-none outline-none text-sm text-white"
        />
      </div>}
      <input type="password" placeholder="Password"  className="py-2 px-4 rounded bg-[#242529] border border-transparent focus:border-[#32323c] outline-none transition text-sm"  />
      <button
        type="submit"
        className="mt-2 mb-4 w-full py-2 rounded bg-gradient-to-r from-white to-gray-200 text-black font-semibold text-sm shadow hover:from-gray-200 hover:to-white transition"
      >
        Create an account
      </button>
    </form>
    <div className="text-center text-sm text-gray-300 my-2">OR SIGN IN WITH</div>
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