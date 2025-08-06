import "./index.css";
import mouseImg from "../../assets/mousenaya1.jpg";
import keyboardImg from "../../assets/KeyboardDiv.jpg";
import TenzImg from "../../assets/TenzDiv.webp";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const firstanime = useRef();
  const secondanime = useRef();
  const thirdanime = useRef();
  const firstscroll = useRef();

  useGSAP(() => {
    gsap.from(firstanime.current, {
      opacity:0,
      x:-100,
      duration:1,
      scrollTrigger: {
        trigger: firstscroll.current,
        start: "top 25%",
      },
    });
  });

  useGSAP(() => {
    gsap.from(secondanime.current, {
      opacity:0,
      x:100,
      duration:1,
      scrollTrigger: {
        trigger: firstanime.current,
        start: "top",
      },
    });
  });

  useGSAP(() => {
    gsap.from(thirdanime.current, {
      opacity:0,
      x:-100,
      duration:1,
      scrollTrigger: {
        trigger: thirdanime.current,
        start: "top 50%",
      },
    });
  });

  return (
    <>
      <h1 ref={firstscroll} className=" sm:text-xl  uppercase  font-bold text-neutral-200  xl:py-10 xl:mb-5  featured-product md:pb-[1rem] md:text-5xl lg:text-6xl xl:text-8xl ">
        Featured Products
      </h1>
      <div
            
        className="Containerfor3div flex  md:flex-col  md:gap-[2rem] md:p-[1.5rem]  md:h-[50%] md:w-[100%] lg:h-full lg:grid lg:grid-cols-2 xl:h-full xl:grid xl:grid-cols-2 xl:px-20"
      >
        <div  ref={firstanime} className="featured-product-divs   md:h-full lg:h-[50%] lg:w-[80%] xl:h-[35%] xl:w-[80%] xl:ml-10 rounded overflow-hidden">
          <img src={mouseImg} className="h-full w-full" />
        </div>
        <div ref={secondanime} className="featured-product-divs h-full lg:w-[100%] lg:mt-[10rem] xl:w-[80%] xl:h-[90%] xl:mt-55 rounded overflow-hidden">
          <img
            src={TenzImg}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div ref={thirdanime} className="featured-product-divs    xl:w-[70%] xl:h-[90%] xl:ml-5 rounded overflow-hidden">
          <img src={keyboardImg} className="h-full w-full object-center" />
        </div>
      </div>
    </>
  );
};
export default Index;
