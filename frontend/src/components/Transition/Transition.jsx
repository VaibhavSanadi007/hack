import {easeInOut, motion}  from "motion/react";
import { useEffect } from "react";
import { useState } from "react";

const Transition = (OgComponent) => {
  const WrappedComponents = (props) =>{
      const [showComp,setshowComp] = useState(false);
    console.log(showComp)
      useEffect(()=>{
       const timeout = setTimeout(()=>{
          setshowComp(true);
        },1500);

        return ()=> clearTimeout(timeout);
      },[]);

    return(
     <>
      <motion.div className="slide-out fixed top-0 left-0 w-full h-full z-999 bg-blue-200 pointer-events-none  origin-left" 
        initial={{scaleX:0}}
        animate={{scaleX:[0,0.5,0]}}
        exit={{scaleX:0}}
        transition={{duration:3,ease:easeInOut}}
      />
      <motion.div className="slide-out fixed top-0 left-0 w-full h-full z-999 bg-blue-200 pointer-events-none  origin-right" 
        initial={{scaleX:0}}
        animate={{scaleX:[0,0.5,0]}}
        exit={{scaleX:0}}
        transition={{duration:3,ease:easeInOut}}
      />
      {showComp && <OgComponent {...props} />}
     </>
  );
  };
  return WrappedComponents;
};
export default Transition