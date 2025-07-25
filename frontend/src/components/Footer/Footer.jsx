import facebook from '../../assets/icons8-facebook-32.png';
import insta from '../../assets/icons8-instagram-32.png';
import x from '../../assets/icons8-xt-32.png';
import discord from '../../assets/icons8-discord-32.png';

const Footer = () => {
  return (
    <footer className=" text-white py-8">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-grow">
        <div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Grow With Us</a></li>
            <li><a href="#" className="hover:underline">Our Brands</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Authenticity</a></li>
            <li><a href="#" className="hover:underline">Return and Cancellation</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Blogs</a></li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Sustainability</a></li>
            <li><a href="#" className="hover:underline">E-Waste Management</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 mt-8 md:mt-0">
        <div className=" text-sm mb-2">Connect With Us</div>
        <div className="flex space-x-4">
          <div className="w-5 h-5 flex items-center justify-center rounded-full text-xs"><img src={facebook} alt="" /></div> 
          <div className="w-5 h-5 flex items-center justify-center rounded-full text-xs"><img src={x} alt="" /></div> 
          <div className="w-5 h-5 flex items-center justify-center rounded-full text-xs"><img src={insta} alt="" /></div> 
          <div className="w-5 h-5 flex items-center justify-center rounded-full text-xs"><img src={discord} alt="" /></div>
        </div>
        <a href="#" className="mt-2  text-xs font-semibold hover:underline">Arion Website</a>

        
      </div>
    </div>
    <div className="mt-8 border-t border-gray-800 pt-4 text-xs flex flex-col md:flex-row md:justify-between items-center">
      <div className="text-center md:text-left mb-2 md:mb-0">
        &copy; MECKEYS LLP - Mechanical Keyboards and E-Sports Accessories
      </div>
      <button className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 mt-2 md:mt-0">
        &#8593;
      </button>
    </div>
  </div>
</footer>

  )
}
export default Footer