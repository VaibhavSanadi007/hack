import aboutuslogo from '../../assets/aboutus.jpg'

const About = () => {
  return (
    <div className='h-screen  w-full flex  justify-center '>
   <div className='h-full w-full md:h-[60%] md:mt-20 xl:mt-0 xl:h-[80%] xl:w-[80%] bg-neutral-900 flex gap-10 justify-between rounded-2xl'>
       <h1 className='text-sm px-5 md:text-md   xl:w-full xl:px-10 flex flex-col  justify-center '>
        Welcome to our Mouse and Keyboard website, your dedicated destination for everything related to computer input devices. Whether you’re a professional gamer, a creative designer, or someone seeking productivity enhancements, our platform is committed to helping you find the perfect mouse, keyboard, and accessories to elevate your computing experience. We believe the right tools can transform your workflow and enjoyment, so we carefully curate products ranging from wireless and mechanical keyboards to ergonomic and high-precision mice. Our team is passionate about technology and strives to provide honest reviews, detailed guides, and expert recommendations. We’re here to simplify your search, answer your questions, and keep you up-to-date with the latest industry trends and innovations. Your satisfaction and comfort are at the heart of our mission, and we look forward to helping you make informed decisions for your setup—whether at home, in the office, or on the go.
      </h1>
      <img src={aboutuslogo} className='rounded-2xl hidden xl:block ' />
   </div>
    </div>
  )
}
export default About