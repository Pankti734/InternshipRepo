import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8" id="Footer">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 justify-between">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Pankti Pandya</h3>
            <p className="text-gray-400">
              Frontend Developer based in India, specializing in web development
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-pink-300"
              />
              <button
                type="sbmit"
                className="bg-gradient-to-r from-purple-400 to-pink-500 py-2 rounded-r-lg text-white px-4"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row  items-center justify-between">
          <p className="text-gray-400">&copy; {new Date().getFullYear()}</p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              className="text-gray-400 hover:text-white"
              href="https://www.linkedin.com/in/pankti-pandya-a72664223/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              className="text-gray-400 hover:text-white"
              href="https://github.com/Pankti734"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a className="text-gray-400 hover:text-white" href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </div>
          <div className="flex space-x-4">
            <a className="text-gray-400 hover:text-white" href="">
              Privacy
            </a>
            <a className="text-gray-400 hover:text-white" href="">
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
