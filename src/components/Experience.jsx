import React, { useState } from "react";
import { Experiencedin } from "./Constants";

const GetWorks = ({ item }) => {
  return (
    <div className="md:flex flex-row mt-5">
      <div className="bg-gray-800 border-l-4 border-blue-500 mr-4 h-40  w-80 justify-center items-center mb-5">
        <img
          src={item.companylogo}
          alt=""
          className="h-36 p-2   object-contain "
        />
      </div>
      <div className="flex flex-col">
      <span className="text-2xl text-blue-300 font-bold">#{item.company}</span>
        <span className="text-xl  font-bold">{item.role}</span>
       
        <span>{item.worktime}</span>
        {item.workdone.map((ele) => {
          return (
            <div className="flex p-2 flex-row items-start ">
              <div className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <span className="">{ele}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function Experience() {
  const [index, setindex] = useState(0);
  let backlimit = 0;
  let maxlimit = Experiencedin.variouscompanies.length;
  const CheckandPointto = (action) => {
    switch (action) {
      case "forward":
        if (index + 1 === maxlimit) {
          setindex(0);
        } else {
          setindex(index + 1);
        }
        break;
      case "backward":
        if (index + 1 === backlimit) {
          setindex(maxlimit - 1);
        } else {
          setindex(index - 1);
        }
        break;
      default:
        setindex(0);
        break;
    }
  };
  return (
    <div class="box" id="Experience">
      <div className="md:px-16 lg:max-w-4xl mb-10 w-full">
        <div className="md:flex lg:flex-row-reverse flex-col h-full justify-between items-center p-2 md:p-0 md:h-screen">
          <div className="flex flex-col">
            <span className="text-4xl font-semibold   uppercase">
              {Experiencedin.header}
            </span>
            <span className="pt-3">{Experiencedin.description}</span>
            <GetWorks item={Experiencedin.variouscompanies[index]} />
            <div className="flex justify-evenly mt-6">
              {index + 1 > 1 && (
                <button
                  onClick={() => {
                    CheckandPointto("backward");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-narrow-left"
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
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="5" y1="12" x2="9" y2="16" />
                    <line x1="5" y1="12" x2="9" y2="8" />
                  </svg>
                </button>
              )}
              {index + 1}

              <button
                onClick={() => {
                  CheckandPointto("forward");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-arrow-narrow-right"
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="15" y1="16" x2="19" y2="12" />
                  <line x1="15" y1="8" x2="19" y2="12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
