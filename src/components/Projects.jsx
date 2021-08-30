import React, { useState} from "react";
import { WorkShow } from "./Constants";
import { LazyMotion, domAnimation, m } from "framer-motion";
function Projects() {
  // eslint-disable-next-line
  const [Data, setData] = useState(WorkShow);

 
  return (
    <LazyMotion features={domAnimation}>
      <m.div id="Works" className="Works" animate={{  }}>
        <div className="md:px-16 max-w-4xl mb-16" id="Works">
          <div className="flex flex-col">
            <span className="text-4xl font-semibold ml-5  uppercase">
              {Data.header}
            </span>
            <span className="   pt-3 ml-5">{Data.description}</span>
          </div>
          {Data.works.map((ele, index) => {
            return (
              <div className="bg-gray-800 m-3 p-3 flex flex-col">
                <div
                  className={
                    (index + 1) % 2 === 0
                      ? "md:flex  flex-row-reverse rounded justify-between p-2 items-center "
                      : " md:flex rounded justify-between p-2 items-center "
                  }
                >
                  <div className="flex flex-col">
                    <span className="text-xl text-gray-200 font-bold border-b-2 pb-2 m-3 border-gray-700">
                      #{index + 1} {ele.name}
                    </span>
                    <span className="p-5 text-gray-300">
                      {ele.project_description}
                    </span>
                  </div>
                  <div>
                    <div className="md:w-80 ">
                      <img
                        src={ele.image}
                        alt=""
                        className="object-contain aspect-w-1 aspect-h-1   overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
                      />
                    </div>
                  </div>
                </div>
                <button
                  className={
                    (index + 1) % 2 === 0
                      ? "btn bg-gray-900  self-end mr-5 text-blue-300"
                      : "btn bg-gray-900   self-start ml-5"
                  }
                >
                  <a href={ele.linkto}>{Data.view}</a>
                </button>
              </div>
            );
          })}
        </div>
      </m.div>
    </LazyMotion>
  );
}

export default Projects;
