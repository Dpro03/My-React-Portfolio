import React from "react";

import CSS from "../assets/css.png";
import HTML from "../assets/html5.png";
import JavaScript from "../assets/javascript.png";
import Reactimg from "../assets/react.png";
import Node from "../assets/nodejs.png";
import Tailwind from "../assets/tailwind-css.png";
import GitHub from "../assets/github.png";
import MySql from "../assets/mysql.png";

const Skills = () => {
  return (
    <div name="Skills" className="w-full h-screen bg-[#0a192f]  text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I have worked with.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={HTML} alt="HTML5" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={CSS} alt="CSS" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto pt-4"
              src={JavaScript}
              alt="JavaScript"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={GitHub} alt="GitHub" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={Node} alt="Node.js" />
            <p className="my-4">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={Reactimg} alt="React" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={Tailwind} alt="Tailwind" />
            <p className="my-4">Tailwind-CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={MySql} alt="MySql" />
            <p className="my-4">MySql</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
