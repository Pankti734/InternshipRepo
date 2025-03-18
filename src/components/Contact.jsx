import React from "react";

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="Contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Let's Connect
            </h3>
            <p>
              Open to discuss web development projects or collaborating Projects
            </p>
            <div className="mb-4 mt-8">
              <i class="fa-solid fa-envelope text-pink-400 mr-2"></i>
              <a
                href="mailto:panktipandya734@gmail.com"
                className="hover:underline"
              >
                panktipandya734@gmail.com
              </a>
            </div>
            <div className="mb-4 ">
              <i class="fa-solid fa-phone text-pink-400 mr-2"></i>
              <span>+916351266431</span>
            </div>
            <div className="mb-4 ">
              <i class="fa-solid fa-location-dot text-pink-400 mr-2"></i>
              <span>Street city country</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name:
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-pink-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Email:
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-pink-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-pink-400"
                  rows="5"
                  placeholder="Type your message"
                />
              </div>
              <button className="bg-gradient-to-r from-purple-400 to-pink-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
