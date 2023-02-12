import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-r from-slate-900 to-rose-900 text-indigo-200"
    >
      <div className="flex flex-col justify-center items-center w-auto h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-4">
          <div className="sm:text-right pbb-8 pl-6">
            <p className="sm:text-right text-5xl font-bold inline border-b-4 ml-6 border-indigo-500">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] grid sm:grid-cols-2 gap-8 px-4 pt-2">
          <div className="text-4xl font-bold ml-6 py-4">
            <p>
              Hi, I'm Dave... It's nice to meet you! Please take a look
              around...
            </p>
          </div>
          <div>
            <div className="text-blue-200 text-left px-4 pt-2 ml-10 w-auto">
              This is a new venture for me. For the past 20 plus years, I have
              had the fortune of working as a respiratory therapist. After two
              decades of experience in healthcare, I have decided that I needed
              a change. My interest in tech has led me to attend a 6-month
              coding bootcamp at the University of Connecticut. I believe my
              healthcare leadership skills can easily transfer to a successful
              technology career where my passion and desire to improve lives can
              continue!
              <div className="text-indigo-400 text-2xl underline text-left px-0 pt-1 ml-0 w-auto">
                <p>
                  Some of my abilities include:<br></br>
                </p>
              </div>
              <div className="text-blue-200 text-left pt-1  w-auto">
                <p>
                  -Adaptability, collaboration and good communication. <br></br>
                  -Leadership and team building.<br></br>
                  -Ability to use pseudocode to solve problems.<br></br>
                  -Strong Grasp of HTML, CSS and JavaScript.<br></br>
                  -Experience with React, Node.js and MongoDB.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
