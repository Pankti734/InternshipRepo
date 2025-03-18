import React from "react";
import Myimage from "../assets/profile.jpg";
const Hero = () => {
  return (
    <div id="Hero" className="bg-black text-white text-center py-16 ">
      <img
        src={Myimage}
        className="mx-auto mb-8 w-48 h048 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      ></img>
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Pankti Pandya
        </span>
        ,Frontend Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300 px-4 ">
        I am specialized in building modern and responsive web applications
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-gradient-to-r from-purple-400 to-pink-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Connect with Me
        </button>
        <button className="bg-gradient-to-r from-purple-400 to-pink-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
