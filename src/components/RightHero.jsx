import React, { useState } from "react";
import { ProfileDescribe, skills, skillset } from "./Constants";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./HeroIcons/code.json";
import NavRight from "./NavRight";
function RightHero() {
  const { role_description, skill_header, role_question, drinks } =
    ProfileDescribe;
  const [open, setopen] = useState(false);
  return (
    <div className="About" id="About">
      <NavRight hero={true} />
      <div className="md:flex lg:flex-row-reverse flex-col h-full justify-between items-center p-2 md:p-0 md:h-screen mb-10 md:mb-0  ">
        <div>
          <div className="lg:h-96 md:w-96 lg:mr-10 mr-0 ">
            {/* <img src={Hero} alt="" /> */}
            <Lottie animationData={groovyWalkAnimation} />
          </div>
        </div>
        <div className="flex flex-col md:px-16">
          <span className="text-4xl font-semibold   uppercase  ">
            {role_question}
          </span>
          <span className="pt-3">{role_description}</span>
          <span className="pt-3 text-lg ">
            {skill_header}{" "}
            <span
              className="text-blue-300 cursor-pointer tooltip tooltip-bottom"
              data-tip="i don't drink either of them,LOL!"
            >
              {drinks}
            </span>
          </span>
          <div className="grid  pt-8 lg:grid-cols-3 grid-cols-2  grid-flow-row-dense gap-0 max-w-sm pb-4">
            {skills.map((skill) => {
              return (
                <div className="flex flex-row   space-x-1 items-center">
                  {skill.icon && <skill.icon />}
                  <span className="text-lg">{skill.name}</span>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row items-center cursor-pointer">
            <button className="flex" onClick={() => setopen(!open)}>
              <span className="text-blue-500 pr-2 capitalize">
                see my full arsenal
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-up-right-circle"
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
                <circle cx="12" cy="12" r="9" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <polyline points="15 15 15 9 9 9" />
              </svg>
            </button>
            {open && <ModalSkill open={open} setopen={setopen} />}
          </div>
          <div class="mockup-code rounded-lg bg-gray-900 mt-3 max-w-sm ">
            <pre data-prefix="$">
              <code>./life</code>
            </pre>
            <pre data-prefix=">" class="text-warning">
              <code>running...</code>
            </pre>
            <pre data-prefix=">" class="text-success">
              <code>Done!</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightHero;

function ModalSkill({ setopen, open }) {
  return (
    <div
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div class="inline-block align-bottom bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-black  pt-5 pb-4 sm:p-6 sm:pb-4">
            <button
              type="button"
              class="text-red-500"
              onClick={() => setopen(!open)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div class="mt-3 md:grid-cols-3 grid gap-0 grid-cols-2 ">
              {skillset.map((skill) => {
                return (
                  <div className=" flex-row    items-center flex gap-1 p-2">
                    {skill.icon && <skill.icon color="blue" />}
                    <span className="text-lg text-gray-200">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
