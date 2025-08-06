import keyboard3dlogo from "../../assets/keyboard3dlogo.png";
import mouse3dlogo from "../../assets/mouse3dlogo.png";
import deskmat3dlogo from "../../assets/deskmat3dlogo.png";
import homepage from "../../assets/homepage.png";
import { useNavigate } from "react-router-dom";
import { useLenis } from "lenis/react";

const ThirdPage = () => {
  const lenis = useLenis();
  const goTop = () => {
   lenis.scrollTo(0);
  };

  const navigate = useNavigate();

  const mousenav = () => {
    navigate("/mouse");
  };

  const keynav = () => {
    navigate("/keyboard");
  };

  const deskmatnav = () => {
    navigate("/deskmat");
  };

  return (
    <div className="h-full w-full flex items-center justify-center ">
      <div className="flex xl:gap-15 ">
        <div
          className="bg-neutral-900 xl:h-50 xl:w-50 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer rounded active:scale-100 flex items-center justify-center xl:p-5"
          onClick={() => goTop()}
        >
          <img src={homepage} className="xl:h-1/2" />
        </div>
        <div
          className="bg-neutral-900  xl:h-50 xl:w-50 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer rounded active:scale-100 flex items-center justify-center xl:p-5"
          onClick={() => mousenav()}
        >
          <img src={mouse3dlogo} />
        </div>
        <div className="bg-neutral-900  xl:h-50 xl:w-50 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer rounded active:scale-100 flex items-center justify-center xl:p-5">
          <img
            src={keyboard3dlogo}
            className="xl:h-[70%]"
            onClick={() => keynav()}
          />
        </div>
        <div className="bg-neutral-900  xl:h-50 xl:w-50 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer rounded active:scale-100 flex items-center justify-center xl:p-5">
          <img
            src={deskmat3dlogo}
            className="xl:h-[60%]"
            onClick={() => deskmatnav()}
          />
        </div>
      </div>
    </div>
  );
};
export default ThirdPage;
