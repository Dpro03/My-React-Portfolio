import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="sm:flex flex-col shrink sm:shrink-2 w-full h-screen bg-gradient-to-r from-blue-900 to-rose-900 flex justify-center items-center p-4 align-bottom"
    >
      <form
        method="POST"
        action="https://getform.io/f/4db33b7f-e7b2-4df1-aa39-2192b85dc07a"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-4">
          <p className="text-5xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4 text-2xl">
            Submit the form below or send me an email at dpro308@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="8"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-black px-6 py-3 my-6 mx-auto flex items-center">
          Let's Collaborate <br></br>
        
        </button>
      </form>
    </div>
  );
};

export default Contact;
