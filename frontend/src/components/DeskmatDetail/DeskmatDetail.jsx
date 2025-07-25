import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import logo1 from '../../assets/handshake.png';
import logo2 from '../../assets/cod.png';
import logo3 from '../../assets/warranty.png';
import logo4 from '../../assets/securepay.png';
import logo5 from '../../assets/shipping.png';

const DeskmatDetail = () => {
  const sliderRef = useRef(null);
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [likeflag,setlikeflag] = useState(false);
  
  const [value, setvalue] = useState(null);
  const goToSlide = (idx) => {
    sliderRef.current.slickGoTo(idx);
  };

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  const decrement = () => {
    if(value==0){
      setCount(0);
      return;
    }
    setCount(prev => (prev > 1 ? prev - 1 : 1));
  };

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const getMatDetails = async (id) => {
    const data = await axios.get(`http://localhost:3000/matSpecific/${id}`, {
      withCredentials: true,
    });
    setvalue(data.data);
  };
  console.log(value);

  useEffect(() => {
    getMatDetails(id);
  }, []);

  return (
    <>
    
    <div className=" xl:flex xl:gap-3 xl:px-5 ">
      {/* Slick carousel */}
      <div className="h-100 lg:h-150 w-full rounded  xl:h-120 xl:w-[60%] relative ">
        <Slider ref={sliderRef} {...settings}>
          <div>
            <div className="h-70 lg:h-120 xl:h-100 w-full" 
             style={{
              backgroundImage: value?.matImg1
                ? `url(${value.matImg1})`
                : undefined,
              backgroundSize: "contain",
              backgroundRepeat:"no-repeat",
              backgroundPosition: "top center",
            }} ></div>
          </div>
           <div>
            <div className=" h-70 lg:h-120  xl:h-100 w-full" 
             style={{
              backgroundImage: value?.matImg2
                ? `url(${value.matImg2})`
                : undefined,
              backgroundSize: "contain",
              backgroundRepeat:"no-repeat",
              backgroundPosition: "top center",
            }} ></div>
          </div>
           <div>
            <div className="h-70 lg:h-120 xl:h-100 w-full" 
             style={{
              backgroundImage: value?.matImg3
                ? `url(${value.matImg3})`
                : undefined,
              backgroundSize: "contain",
              backgroundRepeat:"no-repeat",
              backgroundPosition: "top center",
            }} ></div>
          </div>
           <div>
            <div className="h-70 lg:h-120  xl:h-100 w-full" 
             style={{
              backgroundImage: value?.matImg4
                ? `url(${value.matImg4})`
                : undefined,
              backgroundSize: "contain",
              backgroundRepeat:"no-repeat",
              backgroundPosition: "top center",
            }} ></div>
          </div>
        </Slider>
        <div className="h-10 w-[5%] bottom-[10%] lg:right-[60%]  right-[55%] flex xl:w-[10%] xl:h-15 xl:mx-10 gap-2 mb-4 absolute xl:bottom-10 xl:right-65">
          <div
            onClick={() => goToSlide(0)}
            className={` px-5 py-10 lg:px-10 lg:py-10 cursor-pointer  xl:px-10 xl:py-10 rounded `}
            style={{
              backgroundImage: value?.matImg1
                ? `url(${value.matImg1})`
                : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            onClick={() => goToSlide(1)}
            className="px-5 py-10 lg:px-10 lg:py-10 cursor-pointer  xl:px-10 xl:py-10 rounded"
             style={{
              backgroundImage: value?.matImg2
                ? `url(${value.matImg2})`
                : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            onClick={() => goToSlide(2)}
            className="px-5 py-10 lg:px-10 lg:py-10 cursor-pointer 0 xl:px-10 xl:py-10 rounded"
             style={{
              backgroundImage: value?.matImg3
                ? `url(${value.matImg3})`
                : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            onClick={() => goToSlide(3)}
            className="px-5 py-10 lg:px-10 lg:py-10 cursor-pointer  xl:px-10 xl:py-10 rounded"
             style={{
              backgroundImage: value?.matImg4
                ? `url(${value.matImg4})`
                : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
      <div id="right-side-div" className="xl:flex xl:flex-col xl:gap-3.5">
        <h1 className="uppercase text-xl py-2 xl:text-5xl">{value?.matname}</h1>
        <h5>Ultra smooth Deskmat</h5>
        <h6 className="text-cyan-800">in Stock</h6>
        <h1>&#8377; {value?.minPay}</h1>
        <div className="counter">

<div className="flex flex-wrap items-center gap-3 md:gap-4"> 
  <div className="flex border border-neutral-800 rounded-sm text-lg font-medium">
    <button className="px-3 py-2  transition " onClick={decrement}>-</button>
    <span className="px-4 py-2 border-l border-r r border-neutral-800 select-none">{count}</span>
    <button className="px-3 py-2  transition" onClick={increment}>+</button>
  </div>

  <button className="flex-1 md:flex-none bg-black text-white font-semibold px-6 py-2 rounded-sm hover:bg-gray-800  text-center active:scale-95">
    Add to cart
  </button>

  <button className="border  border-neutral-800 rounded-sm p-2  transition " onClick={()=>setlikeflag(!likeflag)}>
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5  ${likeflag?'text-pink-800':'text-white'} `} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
               4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 
               14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
               6.86-8.55 11.54l-1.35 1.31z" />
    </svg>
  </button>
</div>

<div className="border-t border-b py-6 px-4 md:px-10 mt-5 xl:mt-5 ">
  <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6  xl:gap-x-25   text-center text-sm md:text-base">
    
    <div className="flex items-center justify-center flex-col gap-2">
      <div className="h-10 w-10">
            <img src={logo1} className="h-full w-full"/>
      </div>
      <p>Bulk <br /> Deals</p>
    </div>

    <div className="flex items-center justify-center flex-col gap-2">
      <div  className="h-10 w-10">
        <img src={logo2} />
      </div>
      <p>Cash on <br/> Delivery</p>
    </div>

    <div className="flex items-center justify-center flex-col gap-2">
      <div  className="h-10 w-10">
        <img src={logo5} />
      </div>
      <p>Free Shipping</p>
    </div>

    <div className="flex items-center justify-center flex-col gap-2">
      <div  className="h-10 w-10">
        <img src={logo4} />
      </div>
      <p>Secured <br/> Payment</p>
    </div>

    <div className="flex items-center justify-center flex-col gap-2">
      <div className="h-10 w-10">
        <img src={logo3}  />
      </div>
      <p>1 year <br/> Warranty</p>
    </div>

   


  </div>
</div>


        </div>
      </div>
    </div>
    <div className="descriptionkadiv ">
      <ul className="flex flex-col  gap-4 my-4 text-neutral-500 xl:px-5 xl:my-10">
        <li>Premium polyester fabric with enhanced control.</li>
        <li>Mecmat is undeniably the last desk mat you would need for a top notch experience.</li>
        <li>Anti slip rubber base keeps the mat firmly in place, allowing for remarkable movement speed.</li>
        <li>Anti-fray stitching provides a clean and finished look to the desk mat, making it last exceptionally long and look new as ever.</li>
        <li>Splash resistant features add to the durability and visual appeal, making it suitable for heavy-duty usage.</li>
        <li>Best performance on FPS Games</li>
        <li>Print quality assured with 6-month warranty.</li>
        <li>One year domestic warranty</li>
        <li>Product box contains gaming Mouse, PTFE Skate, Velvet bag, USB dongle/extender, 1.8m Type-c Para cord (x1)</li>
      </ul>
    </div>
    <div className="descriptionImagekadiv w-full  flex flex-col items-center">
      <img src={value?.DescriptionImg1} className="w-[90%]"/>
      <img src={value?.DescriptionImg2} className="w-[90%]"/>
      <img src={value?.DescriptionImg3} className="w-[90%]"/>
      <img src={value?.DescriptionImg4} className="w-[90%]"/>
    </div>
    </>
  );
};
export default DeskmatDetail