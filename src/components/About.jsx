import React from "react";
import AboutImage from "../assets/profile2.jpg";
const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          ></img>
          <div className="flex-1">
            <p className="text-lg mb-8">
              A passionate Frontend developer with a focus on building modern
              and responsive web applications with a strong foundation in
              javascript , I strive to create seamless and efficient user
              experiences. Also trying to evolve in backend technologies as
              well.
              <br />
              Focusing on building skills right now. Developing skills in
              frontend as well as backend domain.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white   transform transition-transform duration-300 hover:scale-105 rounded-full w-10/12 h-2.5"></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="Javascript" className="w-2/12">
                  JavaScript
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white   transform transition-transform duration-300 hover:scale-105 rounded-full w-9/12 h-2.5"></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="ReactJS" className="w-2/12">
                  ReactJs
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white   transform transition-transform duration-300 hover:scale-105 rounded-full w-5/12 h-2.5"></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  Frontend developer Intern at Starkway Vadodara
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
