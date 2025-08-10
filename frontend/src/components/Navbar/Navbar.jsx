import { useState } from "react";
import logo from "../../assets/MeckeysLogo.svg";
import xlogo from "../../assets/icons8-x-32.png";
import { motion } from "motion/react";
 import { useSelector } from 'react-redux';
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const userdata = useSelector((item)=>item.user.value);
  
  const [flag, setflag] = useState(false);

  const Navigation = useNavigate();

  const handleMousetNavigation = () => {
    Navigation("/mouse");
    setflag(false);
  };
  const handlekeyboardtNavigation = () => {
    Navigation("/keyboard");
    setflag(false);
  };
  const handledeskmatNavigation = () => {
    Navigation("/deskmat");
    setflag(false);
  };

  const handleloginNav = () => {
    Navigation("/login");
    setflag(false);
  };

  const handleaboutNav = () => {
    Navigation("/about");
    setflag(false);
  };

  const handlehomeNav = () => {
    Navigation("/");
    setflag(false);
  };

  const handleCartNav = () => {
    Navigation("/cart");
    setflag(false);
  };

  const variant = {
    Listart: {
      y: "-100%",
      transition: {
        duration: 1,
        when: "afterChildren",
      },
    },
    Liend: {
      y: "0",
      transition: {
        duration: 0.8,
        when: "beforeChildren",
      },
    },
  };

  const childVariant = {
    Listart: {
      opacity: 0,
      transition: {
        delay: 0.8,
        staggerChildren: 0.2,
        when: "afterChildren",
      },
    },
    Liend: {
      opacity: 1,
      transition: {
        delay: 0.8,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariant = {
    Listart: {
      opacity: 0,
      y: 15,
      transition: {
        duration: 0.2,
      },
    },
    Liend: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const numvariant = {
    start: {
      y: 0,
      opacity: 0,
      transition: {
        delay: 1,
      },
    },
    end: {
      y: 15,
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
  };

  return (
    <>
      <div className="h-20 lg:h-30 xl:h-25 xl:px-10 w-full  text-[#FFFFFF]     ">
        <nav
          className={`h-full w-full   px-[1%] flex items-center justify-between relative z-2  `}
        >
          <img
            src={logo}
            className="w-[5%] md:w-[13%] xl:w-[5%]  nav-logo-mobile  "
            onClick={() => location.reload()}
          />
          <div className="flex gap-10 ">
           
            <div
              className="rounded cursor-pointer py-1 uppercase  group relative active:scale-90 nav-text-mobile"
              onClick={handleloginNav}
            >
              {userdata.firstname ||  "Login"}
              <span className="pointer-events-none absolute  left-0 -bottom-0 h-[1%] bg-white block max-w-0 w-full transition-all duration-300 group-hover:max-w-full"></span>
            </div>

            <div
              className="rounded cursor-pointer py-1 uppercase group relative  active:scale-90 nav-text-mobile"
              onClick={() => setflag((prev) => !prev)}
            >
              Menu
              <span className="pointer-events-none absolute left-0 -bottom-0 h-[1%] bg-white block max-w-0 w-full transition-all duration-300 group-hover:max-w-full"></span>
            </div>
          </div>
        </nav>
      </div>

      <motion.div
        animate={flag ? "Liend" : "Listart"}
        initial={"Listart"}
        variants={variant}
        className={`anime-navbar  w-[55%] h-[60%]  z-3  text-black   absolute md:right-0 md:top-0 xl:right-0 xl:top-0  bg-[#FFFFFF] `}
      >
        <nav className="  md:h-[18%] md:px-10  xl:h-[19%] xl:w-full  xl:px-16 flex justify-between items-center   ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={flag ? { opacity: 1 } : { opacity: 0 }}
            variants={childVariant}
          >
            <motion.div
              variants={numvariant}
              animate={flag ? "end" : "start"}
              className="flex gap-7 mt-7 anime-navbar-hidden1"
            >
              <motion.div>
                <h1 className="font-bold text-center text-neutral-950">
                  1000+
                </h1>
                <h1 className="text-[70%] text-center text-neutral-400 ">
                  Happy <br /> Customers
                </h1>
              </motion.div>
              <motion.div>
                <h1 className="font-bold text-center text-neutral-950">40+</h1>
                <h1 className="text-[70%] text-center text-neutral-400">
                  Mouse & <br /> Keyboard Brands
                </h1>
              </motion.div>
              <motion.div>
                <h1 className="font-bold text-center text-neutral-950">150+</h1>
                <h1 className="text-[70%] text-center text-neutral-400">
                  Product <br />
                  Variants
                </h1>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={"Listart"}
            animate={flag ? "Liend" : "Listart"}
            variants={childVariant}
            onClick={() => setflag((prev) => !prev)}
            className=" cursor-pointer anime-navbar-x  "
          >
            <img src={xlogo} className="h-full w-full" />
          </motion.div>
        </nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={flag ? { opacity: 1 } : { opacity: 0 }}
          variants={childVariant}
          className="absolute bottom-[20%] left-[5%] flex flex-col gap-2.5  group anime-navbar-hidden1 "
        >
          <h1 className="group-hover:text-neutral-400 hover:!text-neutral-900   text-neutral-400 duration-300 cursor-pointer  relative">
            Terms & Conditions
          </h1>

          <h1 className="group-hover:text-neutral-400 hover:!text-neutral-900   text-neutral-400 duration-300 cursor-pointer">
            Terms of use{" "}
          </h1>
        </motion.div>

        <motion.ul
          initial={"Listart"}
          animate={flag ? "Liend" : "Listart"}
          variants={childVariant}
          className="absolute  md:top-[45%] lg:top-[25%] xl:top-[30%] top-[50%] left-[65%] flex flex-col  text-[1.1rem] text-neutral-400 uppercase  archia-font group "
        >
          <motion.li
            variants={itemVariant}
            className="group-hover:text-neutral-300 hover:!text-neutral-900   text-neutral-950 duration-300 cursor-pointer  py-1.5"
            onClick={handlehomeNav}
          >
            Home
          </motion.li>
          <motion.li
            variants={itemVariant}
            className="group-hover:text-neutral-300 hover:!text-neutral-900  duration-300 cursor-pointer py-1.5"
            onClick={handlekeyboardtNavigation}
          >
            Keyboard
          </motion.li>
          <motion.li
            variants={itemVariant}
            className="group-hover:text-neutral-300 hover:!text-neutral-900  duration-300 cursor-pointer py-1.5"
            onClick={handleMousetNavigation}
          >
            Mouse
          </motion.li>
          <motion.li
            variants={itemVariant}
            className="group-hover:text-neutral-300 hover:!text-neutral-900  duration-300 cursor-pointer py-1.5"
            onClick={handledeskmatNavigation}
          >
            Deskmat
          </motion.li>
          <motion.li
            variants={itemVariant}
            className="group-hover:text-neutral-300 hover:!text-neutral-900  duration-300 cursor-pointer py-1.5"
            onClick={handleCartNav}
          >
            Cart
          </motion.li>
          <motion.li
            variants={itemVariant}
            className="group-hover:text-neutral-300 hover:!text-neutral-900  duration-300 cursor-pointer py-1.5"
            onClick={handleaboutNav}
          >
            About
          </motion.li>
          <motion.li
            variants={itemVariant}
            className="group-hover:text-neutral-300 hover:!text-neutral-900  duration-300 cursor-pointer py-1.5"
          >
            Logout
          </motion.li>
        </motion.ul>
      </motion.div>
    </>
  );
};
export default Navbar;
