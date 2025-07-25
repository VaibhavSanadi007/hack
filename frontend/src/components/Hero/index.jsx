import './index.css'
import mouseImg from '../../assets/mousediv1.webp';
import keyboardImg from '../../assets/KeyboardDiv.jpg';
import TenzImg from '../../assets/TenzDiv.webp';
const Index = () => {
  return (
    <>
      <h1 className= " sm:text-xl  uppercase  font-bold text-[#FFFFFF]  border-b-1 featured-product md:pb-[1rem] md:text-5xl lg:text-6xl xl:text-8xl ">Featured Products</h1>
        <div className="Containerfor3div flex   md:flex-col  md:gap-[2rem] md:p-[1.5rem]  md:h-[50%] md:w-[100%] lg:h-full lg:grid lg:grid-cols-2 xl:h-full xl:grid xl:grid-cols-2 ">
        <div className="featured-product-divs   md:h-full lg:h-[50%] lg:w-[80%] xl:h-[50%] xl:w-[75%] ">
        <img src={mouseImg} className='h-full w-full'  />
        </div>
        <div className="featured-product-divs h-full lg:w-[100%] lg:mt-[10rem] xl:w-[90%] xl:h-[100%] xl:mt-[10rem]">
        <img src={TenzImg} className='h-full w-full object-cover object-top'  />
        </div>
        <div className="featured-product-divs    xl:w-[90%] xl:h-[100%] ">
        <img src={keyboardImg} className='h-full w-full object-center' />
        </div>
        </div>
    </>
  )
}
export default Index