import MainRoutes from "./mainRoutes/MainRoutes"
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import { ReactLenis} from 'lenis/react'
import { AnimatePresence } from "motion/react";
import Footer from "./components/Footer/Footer";


const App = () => {

  return (
    <>
    <ReactLenis root   options={{
        lerp: 0.01,      
        duration: 1.2,   
        smooth: true,
        smoothTouch: true  
      }} >

    <div className=" min-h-screen  w-full archia-font px-5 text-white overflow-hidden hide-scrollbar" >
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