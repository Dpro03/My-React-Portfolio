import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="Home" className="w-full h-screen bg-gradient-to-r from-blue-900 to-rose-900">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-2xl pb-4 underline">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-stone-400">
          Dave Proto
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#91a4df]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#c0c7db] py-4 max-w-[700px]">
          I am a full stack web developer who enjoys creating awesome digital
          content. I recently graduated from bootcamp at the University of
          Connecticut, and would love to help build and design front-end or
          full-stack projects for your organization!
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-black">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
