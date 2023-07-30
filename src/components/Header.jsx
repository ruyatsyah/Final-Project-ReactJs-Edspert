// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const First = () => {
//     const navigate = useNavigate()
//   return (
//     <>
//       <h3>HOME PAGE  ROUTE</h3>
//       <button onClick={ () => navigate('/about')}>check about</button>
//     </>
//   )
// }

// export default First


import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const navlink = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "Program",
    link: "/",
  },
  {
    title: "Bidang ilmu",
    link: "/",
  },
  {
    title: "Tentang edspert",
    link: "/",
  },
  {
    title: "Masuk/Daftar",
    link: "/t",
  },
];
const Header = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };
  return (
    <div className="bg-primary">
      <div className="text-white mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-[20px] px-4 font-semibold">
              Logo
            </a>
          </div>
          {/* NavLinks */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 transition-all duration-500 hover:bg-gray600 hover:text-white">
              {navlink.map((link, index) => (
                <button onClick={() => navigate('/')} key={index} className="text-gray-300 transition-all duration-500 
                hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-md font-medium" href="{link.link}">
                  {link.title}
                </button>
              ))}
            </div>
          </div>
          {/* Button Hamburger */}
          <div className=" flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400
             hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 
             focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open Main Menu</span>
              {open == true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {open ? (
        <div className="md:hidden ">
          <div className="px-4  pt-2 pb-2 space-y-1 sm:px-3">
            {navlink.map((link, index) => (
              <a
                key={index}
                className="text-gray-300  hover:bg-gray-700 hover:text-white 
                block px-3 py-2 rounded-md text-base font-medium"
                href="{link.link}"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
