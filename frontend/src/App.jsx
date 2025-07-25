import MainRoutes from "./mainRoutes/MainRoutes"
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import { ReactLenis, useLenis } from 'lenis/react'
import { AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Footer from "./components/Footer/Footer";


const App = () => {

const lenis = useLenis(); 
// const location = useLocation();
    
//   useEffect(() => {
//     if (lenis) {
//       lenis.stop();
//       requestAnimationFrame(() => lenis.start());
//       lenis.scrollTo(0, { immediate: true });
//     }
//   }, [location.pathname, lenis]);

  return (
    <>
    <ReactLenis root   options={{
        lerp: 0.01,      
        duration: 1.2,   
        smooth: true,
        smoothTouch: true  
      }} >

    <div className=" min-h-screen  w-full archia-font px-5 text-white">
    <Navbar/>
    <AnimatePresence mode="wait">
     <MainRoutes/>
    </AnimatePresence>
    </div>
      <Footer/>
      </ReactLenis>
    </>
  )
}
export default App