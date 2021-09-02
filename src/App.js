import React, { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { themeChange } from "theme-change";
import logo from "./components/HeroIcons/logo.png";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./components/HeroIcons/loading.json";
import Testimonial from "./components/Testimonial";

const { default: LeftBar } = require("./components/LeftBar");
const { default: RightHero } = require("./components/RightHero");

function App() {
  const [loading, setloading] = useState(true);
  const [toggle, settoggle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
      themeChange(false);
    }, 2500);
  }, []);

  if (loading) {
    return (
      <div className="h-screen max-h-screen flex justify-center items-center">
        <Lottie animationData={groovyWalkAnimation} />
      </div>
    );
  }

  return (
    <div className=''>
      <div className=" md:px-16 md:py-8 md:absolute top-0 lg:relative    flex flex-row items-center justify-between sticky bg-gray-900 z-50 md:hidden">
        <img src={logo} alt="" className="md:h-24 h-16 p-2 md:p-0" />
        <div className="flex md:hidden">
          <button data-toggle-theme="black,light" data-act-class="ACTIVECLASS">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-sun mr-4"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#00bfd8"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="4" />
              <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
            </svg>
          </button>
          <button
            className="lg:hidden text-gray-300 mr-3"
            aria-controls="sidebar"
            // aria-expanded={sidebarOpen}
            onClick={() => settoggle(!toggle)}
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="5" width="16" height="2" />
              <rect x="4" y="11" width="16" height="2" />
              <rect x="4" y="17" width="16" height="2" />
            </svg>
          </button>
        </div>
      </div>
      <div className={toggle?s:x} >
        <div
          className="sm:hidden bg-gray-900"
          id="mobile-menu"
          style={{ display: toggle === false ? "none" : "inline" }}
        >
          <div className="">
            <a
              href="#About"
              className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-semibold"
              aria-current="page"
            >
              About
            </a>
            <a
              href="#Experience"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
            >
              Experience
            </a>
            <a
              href="#Works"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
            >
              Works
            </a>

            <a
              href="#Contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="h-full flex lg:flex-row flex-col p-3  sm:p-0">
        <div className=" md:fixed  w-full  h-full lg:w-5/12  justify-center items-center ">
          <div className=" flex-col  lg:border-blue-300 lg:border-r-2 lg:rounded-r-full lg:h-screen justify-center items-center flex lg:flex-row h-full">
            <LeftBar />
          </div>
        </div>
        <div className=" h-full  lg:w-7/12 lg:absolute right-0">
          <RightHero />
          <Experience />
          <Projects />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
let s =
  "bg-gray-900 w-full h-full z-50  border-gray-800 sm:hidden sticky top-14 border-t-2 ";
let x = "bg-gray-900 w-full h-full z-50  border-gray-500 sm:hidden sticky top-14  ";
