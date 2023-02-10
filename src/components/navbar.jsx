import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import DP from "../assets/dpd.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[90px] flex justify-between items-center px-0 bg-[#52525p] text-indigo-200">
      <div className="pt-14">
        <img src={DP} alt="logo" style={{ width: "85px", height: "85px" }} />
      </div>
      {/* menu */}
      <ul className="hidden md:flex pr-10">
        <li>
          <Link
            className="hover:text-sky-600"
            to="Home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-sky-600"
            to="About"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-sky-600"
            to="Skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-sky-600"
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-sky-600"
            to="Contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* hambuger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 text-indigo-200 hover:text-sky-600"
      >
        {nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile-menu */}
      <ul
        className={
          nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-slate-900 to-rose-900 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl text-indigo-200 hover:text-sky-600">
          <Link onClick={handleClick} to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-sky-600">
          <Link onClick={handleClick} to="About" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-sky-600">
          <Link onClick={handleClick} to="Skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-sky-600">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-sky-600">
          <Link onClick={handleClick} to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <br />
        <br />
        <li classname="py-6 text 2xl">
          <a
            className="flex justify-between items-center left-1 w-full text-indigo-200 hover:text-sky-600"
            href="https://www.linkedin.com/in/david-proto-231521209/"
          >
            linkedin <FaLinkedin size={30} />{" "}
          </a>
        </li>
        <br />
        <li classname="py-6 text 2xl">
          <a
            className="flex justify-between items-center left-1 w-full text-indigo-200 hover:text-sky-600"
            href="https://Github.com/Dpro03/"
          >
            Github <FaGithub size={30} />{" "}
          </a>
        </li>
        <br />
        <li classname="py-6 text 2xl">
          <a
            className="flex justify-between items-center left-1 w-full text-indigo-200 hover:text-sky-600"
            href="mailto:dpro03@gmail.com"
          >
            Email <HiOutlineMail size={30} />{" "}
          </a>
        </li>
        <br />
        <li classname="py-6 text 2xl">
          <a
            className="flex justify-between items-center left-1 w-full text-indigo-200 hover:text-sky-600"
            href="https://www.twitter.com/DavidProto3"
          >
            Twitter <FaTwitter size={30} />{" "}
          </a>
        </li>
        <br />
        <li classname="py-6 text 2xl">
          <a
            className="flex justify-between items-center left-1 w-full text-indigo-200 hover:text-sky-600"
            href="https://drive.google.com/open?id=1-8VXYD_EiPYXND0fgJXwtblzPYKWGPkg&authuser=dpro308%40gmail.com&usp=drive_fs"
          >
            Resume <BsFillPersonLinesFill size={30} />{" "}
          </a>
        </li>
      </ul>

      {/* social-icons */}
      <div className="hidden lg:flex fixed flex-col top-[45%] left-0">
        <ul>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-rose-900">
            <a
              className="flex justify-between items-center w-full text-indigo-100"
              href="https://www.linkedin.com/in/david-proto-231521209/"
            >
              Linkedin <FaLinkedin size={30} />{" "}
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3f4d5a]">
            <a
              className="flex justify-between items-center w-full text-indigo-100"
              href="https://Github.com/Dpro03"
            >
              GitHub <FaGithub size={30} />{" "}
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-rose-900">
            <a
              className="flex justify-between items-center w-full text-indigo-100"
              href="mailto:dpro308@gmail.com"
            >
              Email me! <HiOutlineMail size={30} />{" "}
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3f4d5a]">
            <a
              className="flex justify-between items-center w-full text-indigo-100"
              href="https://drive.google.com/open?id=1-8VXYD_EiPYXND0fgJXwtblzPYKWGPkg&authuser=dpro308%40gmail.com&usp=drive_fs"
            >
              Resume <BsFillPersonLinesFill size={30} />{" "}
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-rose-900">
            <a
              className="flex justify-between items-center w-full text-indigo-100"
              href="https://twitter.com/DavidProto3"
            >
              Twitter <FaTwitter size={30} />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
