import React, { useEffect } from "react";
import { NavItems } from "./Constants";
import { themeChange } from "theme-change";
import { motion } from "framer-motion";
function NavRight() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <motion.div
      className={
        "lg:flex flex-row space-x-8 fixed items-center z-50  right-24 hidden "
      }
    >
      {NavItems?.map((item) => {
        return <NavComp item={item} />;
      })}
      <div className="pt-2">
        <button data-toggle-theme="black,light" data-act-class="ACTIVECLASS">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-sun"
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
      </div>
    </motion.div>
  );
}

export default NavRight;
const NavComp = ({ item }) => {
  return (
    <div>
      <div className=" p-2 cursor-pointer hover:text-blue-300 font-medium hover:font-bold  border-blue-300 hover:underline">
        <a href={`#${item}`}>{item}</a>
      </div>
    </div>
  );
};
