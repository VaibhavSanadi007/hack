  import video from '../../assets/videoplayback.webm';
  import { useRef } from 'react';
  import gsap from 'gsap';
  import { useGSAP } from '@gsap/react';

  const FirstPage = () => {

    const animetext = useRef();

    useGSAP(()=>{
      gsap.from(animetext.current,{
        x: -70,
        opacity:0,
        duration:1,
        delay:1,
      })
    })

   

  return (
    <div className="h-full mt-20 w-full md:mt-0 md:flex xl:flex xl:flex-row xl:mt-0 ">
<div className=" md:w-full md:mt-30 flex items-center xl:w-1/2 xl:h-full xl:mt-20 xl:px-10" ref={animetext}>
        <h1  className=" text-2xl  xl:text-4xl/14  text-neutral-500  ">Master the <span className="bg-neutral-200 text-black xl:px-1 rounded"> mouse </span> <br /> command the keyboard <br /> — rule the digital world</h1>
      </div>
      <video  src={video} autoPlay muted loop className="h-70 w-full md:h-90 md:w-[60%] xl:h-1/2 xl:w-1/2  "></video>
    </div>
  )
}
export default FirstPage