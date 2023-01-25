import React from "react";

const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pbb-8 pl-4">
            <p className="sm:text-right text-5xl font-bold inline border-b-4  border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 pt-4">
          <div className="text-4xl font-bold">
            <p>
              Hi, I'm Dave... It's nice to meet you! Please take a look
              around...
            </p>
          </div>
          <div>
            <p class="text-blue-300">
              This is new to me. My life for the past 20 plus years has been
              working as a respiratory therapist. Being a healthcare
              professional had been an amazing experience for me. In my career,
              I was able to precept new members, including doctors, to life as
              teammates in improving the health of other people. I thought that I wouldn't cry, but breaking your heart breaks mine!
              the University of Connecticut's Full Stack Web Development
              Bootcamp. I am currently looking for a full time position as a web
              developer. Please feel free to contact me if you have any
              questions or if you would like to work together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
