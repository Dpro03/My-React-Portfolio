import React from "react";
import curiousappetite from "../assets/curious-appetite6.png";
import DayPlanner from "../assets/dayplanner.png";
import rainydayMovies from "../assets/rainy-day-movies.png";
import weather from "../assets/weather.png";
import JavaScriptQuiz from "../assets/JavaScript-Quiz.png";
import passwordGenerator from "../assets/passwordGenerator.png";
import jate from "../assets/jate.png";
const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300 bg-gradient-to-r from-slate-900 to-rose-900"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-5xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6 text-2xl">Check out some of my recent work</p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid-item */}
          <div
            style={{ backgroundImage: `url(${curiousappetite})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text white tracking-wider">
                A node.js recipe sharing app using MySQL, Express, Handlebars
                and sequelize.
              </span>
              <div classname="pt-8 text-center">
                <a href=" https://obscure-shore-43973.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/HANIN003/curious-appetite.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${DayPlanner})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text white tracking-wider">
                A dynamic day planner using HTML, CSS and JavaScript
              </span>
              <div classname="pt-8 text-center">
                <a href="https://dpro03.github.io/dayplanner/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Dpro03/dayplanner.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${rainydayMovies})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text white tracking-wider">
                A movie app to view trailer. poster and synopsis using HTML,
                CSS, JavaScript and a web API.
              </span>
              <div classname="pt-8 text-center">
                <a href="https://emilybernard.github.io/rainy-day-movies/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/EmilyBernard/rainy-day-movies.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${weather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text white tracking-wider">
                A weather application using HTML, CSS and JavaScript
              </span>
              <div classname="pt-8 text-center">
                <a href="https://dpro03.github.io/weather-dashboard/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Dpro03/weather-dashboard.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${JavaScriptQuiz})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text white tracking-wider">
                A timed, scored quiz using HTML, CSS and JavaScript
              </span>
              <div classname="pt-8 text-center">
                <a href="https://dpro03.github.io/Javaquiz/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Dpro03/Javaquiz.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${passwordGenerator})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text white tracking-wider">
                A random password generator using HTML, CSS and JavaScript
              </span>
              <div classname="pt-8 text-center">
                <a href="https://dpro03.github.io/genpass/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Dpro03/genpass.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${jate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text white tracking-wider">
                A PWA using express, webpacks, concurrently, babel,
                indexeddb and is designed to function on or offline.
              </span>
              <div classname="pt-8 text-center">
                <a href="https://warm-island-68234.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Dpro03/Text-Editor.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
