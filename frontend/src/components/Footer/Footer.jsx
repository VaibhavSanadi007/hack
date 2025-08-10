import facebook from '../../assets/icons8-facebook-32.png';
import insta from '../../assets/icons8-instagram-32.png';
import x from '../../assets/icons8-xt-32.png';
import discord from '../../assets/icons8-discord-32.png';

const Footer = () => {
  return (
    <footer className=" text-neutral-400  py-20 ">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-grow">
        <div>
          <ul className="space-y-2 ">
            <li><a href="#" className="hover:text-neutral-300">About Us</a></li>
            <li><a href="#" className="hover:text-neutral-300">Grow With Us</a></li>
            <li><a href="#" className="hover:text-neutral-300">Our Brands</a></li>
            <li><a href="#" className="hover:text-neutral-300">Careers</a></li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2 ">
            <li><a href="#" className="hover:text-neutral-300">Authenticity</a></li>
            <li><a href="#" className="hover:text-neutral-300">Return and Cancellation</a></li>
            <li><a href="#" className="hover:text-neutral-300">FAQs</a></li>
            <li><a href="#" className="hover:text-neutral-300">Blogs</a></li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2  ">
            <li><a href="#" className="hover:text-neutral-300">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-neutral-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-neutral-300">Sustainability</a></li>
            <li><a href="#" className="hover:text-neutral-300">E-Waste Management</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 mt-8 md:mt-0 ">
        <div className=" mb-2">Connect With Us</div>
        <div className="flex space-x-4">
          <div className="w-5 h-5 flex items-center justify-center rounded-full text-xs"><img src={facebook} alt="" /></div> 
          <div className="w-5 h-5 flex items-center justify-center rounded-full text-xs"><img src={x} alt="" /></div> 
          <div className="w-5 h-5 flex items-center justify-center rounded-full text-xs"><img src={insta} alt="" /></div> 
          <div className="w-5 h-5 flex items-center justify-center rounded-full text-xs"><img src={discord} alt="" /></div>
        </div>
        <a href="#" className="mt-2  text-xs font-semibold hover:text-neutral-300">Arion Website</a>

        
      </div>
    </div>
    <div className="mt-8 border-t  pt-4  flex flex-col md:flex-row md:justify-between items-center">
      <div className="text-center md:text-left mb-2 md:mb-0">
        &copy; MECKEYS LLP - Mechanical Keyboards and E-Sports Accessories
      </div>
      <button className="border xl:h-10 xl:w-10 xl:flex xl:items-center xl:justify-center rounded-full xl:p-3   mt-2 md:mt-0">
        &#8593;
      </button>
    </div>
  </div>
</footer>

  )
}
export default Footer