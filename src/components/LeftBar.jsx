import React, { useEffect } from "react";
import { socialnames, ProfileIntro, Contactdetails } from "./Constants";
import { motion } from "framer-motion";
import { themeChange } from "theme-change";
import logo from "./HeroIcons/logo.png";
const SocialIcons = ({ name, icon, link }) => {
  return (
    <div className="tooltip tooltip-bottom" data-tip={name}>
      <a href={link}>
        <img src={icon} alt={name} />
      </a>
    </div>
  );
};
function LeftBar() {
  const {
    contact_btn_text,
    description,
    header,
    name,
    devrole,
    sirname,
    namealternative,
  } = ProfileIntro;
  const boxVariant = {
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChldren",
      },
    },
    hidden: {
      x: "-100vw",
    },
  };

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <motion.div
      className="flex flex-col h-full lg:h-screen mb-10 justify-center  md:justify-start md:items-start"
      variants={boxVariant}
      animate="visible"
      initial="hidden"
    >
      <img
        src={logo}
        alt=""
        className="md:h-24 h-16 p-2   px-16 hidden sm:flex"
      />
      <div className="flex flex-col justify-center md:px-16 flex-1 p-2">
        <span className="text-sm md:tracking-wide tracking-tight md:text-xl  mb-5 mt-5">
          {header}
        </span>
        <motion.span
          className="lg:text-7xl md:text-5xl text-4xl  md:font-extrabold font-extrabold tracking-widest ease-in-out cursor-pointer uppercase "
          whileHover={{
            scale: 1.1,
          }}
        >
          {name}
          <span className="text-blue-500 flex pt-2 items-center ">
            {sirname}
          </span>
        </motion.span>
        <motion.span className="md:text-lg pt-2 text-sm ">
          {namealternative}
        </motion.span>
        <span className="pt-2 text-blue-300  font-semibold">{devrole}</span>
        <span className="pt-3 md:tracking-widest  md:leading-snug  text-sm">
          {description}
        </span>
        <div className="pt-4">
          <button class="btn hover:bg-blue-300  ">
            <a href={Contactdetails.linkto}>{contact_btn_text}</a>
          </button>
        </div>
        <div className="flex md:space-x-2 pt-5 ">
          {socialnames.map((name) => {
            return (
              <SocialIcons
                name={name.name}
                key={name}
                icon={name.icon}
                link={name.linkto}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default LeftBar;
