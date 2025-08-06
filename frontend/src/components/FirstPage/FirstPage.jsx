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
    <div className="h-full  w-full flex ">
<div className="w-1/2 h-full flex items-center xl:mt-20 xl:px-10" ref={animetext}>
        <h1  className="xl:text-5xl/14  text-neutral-500">Master the <span className="bg-neutral-200 text-black xl:px-1 rounded"> mouse </span> <br /> command the keyboard <br /> — rule the digital world</h1>
      </div>
      <video  src={video} autoPlay muted loop className="xl:h-1/2 xl:w-1/2 "></video>
    </div>
  )
}
export default FirstPage