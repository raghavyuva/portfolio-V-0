import React from "react";
import { Contactdetails } from "./Constants";

function Contact() {
  return (
    <div className="Contact" id="Contact">
      <div className="md:px-16 max-w-4xl mb-10">
        <div className="ml-5 flex flex-col">
          <span className="text-4xl font-semibold   uppercase">
            {Contactdetails.header}
            <span className="ml-2 p-5 text-blue-300 animate-pulse">
              {Contactdetails.icon}
            </span>
          </span>
          <span className="   pt-3 ">
            {Contactdetails.description}
            <a href={Contactdetails.linkto}>
              <span className="text-blue-300"> {Contactdetails.email}</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
