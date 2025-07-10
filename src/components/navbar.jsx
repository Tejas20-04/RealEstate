import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import About from "./About";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
export default function navbar() {
  // start from state
  // create a state to manage the appearance of mobile menu on different screen sizes

  const [mobileMenu, setmobileMenu] = useState(false);
  function handleMobile() {
    setmobileMenu((prev) => !prev);
  }
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenu]);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between item-center py-4 px-6 md:px-20 lg:px-32 bg=transparent">
        <img src={assets.logo} alt=" logo" />

        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testmonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
        <img
          src={assets.menu_icon}
          className=" md:hidden  w-7  cursor-pointer"
          alt="Menu icon"
          onClick={() => handleMobile()}
        />
      </div>
      {/*------------------mobile-menu-------------------*/}
      <div
        className={`md:hidden ${
          mobileMenu ? "fixed w-full" : "w-0 h-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6">
          <img
            src={assets.cross_icon}
            className="cursor-pointer w-5"
            onClick={() => handleMobile()}
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => handleMobile()}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => handleMobile()}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => handleMobile()}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => handleMobile()}
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
}
