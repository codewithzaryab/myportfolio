import React from "react";
import "./Navbar.css";

import { IoMdContact } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { TbMeeple } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import profile from '../../assets/profile-photo.jpeg'
import { useState } from "react";

const Navbar = () => {
  const [ActiveNav, setActiveNav] = useState("#");
  return (
    
      
   <nav>

    <div className=" p-6 position:absolute  flex justify-between items-center md:py-100 md:overflow-hidden md:block  ">
      <a href="#" className="flex justify-center">
        <img
          className="max-w-15 max-h-16 px-6 rounded-full overflow-hidden"
          src={profile}
          alt="logo"
        />
        <span className="text-3xl py-3 ">Zaryab's Portfolio</span>
      </a>
      <div className="flex justify-center items-center gap-10 hidden md:flex">
      <a
        href="#"
        className="{ActiveNav === '#' ? 'active' : ''} flex justify-center items-center"
      >
        <IoMdHome />
        <span>Home</span>
      </a>

      <a
        href="#Skill"
        onClick={() => setActiveNav("#Skill")}
        className="{ActiveNav === '#Skill' ? 'active' : ''} flex justify-center items-center"
      >
        <IoMdContact />
        <span>Skill</span>
      </a>
      <a
        href="#About"
        onClick={() => setActiveNav("#About")}
        className="{ActiveNav === '#About' ? 'active' : ''} flex justify-center items-center"
      >
        <TbMeeple />
        <span>About</span>
      </a>
      <a
        href="#Contact"
        onClick={() => setActiveNav("#Contact")}
        className="{ActiveNav === '#Contact' ? 'active' : ''} flex justify-center items-center"
      >
        <IoMdContact />
        <span>Contact</span>
      </a>
      
      </div>
      <button className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hidden md:flex  ">Login</button>
      
    <a href="hamburger left-1/2 top-1/2 p-2 md:hidden flex justify-center items-center">
        <GiHamburgerMenu className="md:hidden" />
      </a>
      <div className="fixed bg-white"></div>
      
    
     
    </div>
   
    </nav>
  );
};

export default Navbar;
