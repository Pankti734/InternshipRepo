import React from "react";
import Virtualimg from "../assets/logo.jpg";
import currencyImg from "../assets/Currency.jpg";
import netflixImg from "../assets/netflix.jpg";

const projects = [
  {
    id: 1,
    name: "Virtual Assistant",
    technologies: "HTML CSS JAVASCRIPT",
    image: Virtualimg,
    github:
      "https://github.com/Pankti734/InternshipRepo/tree/main/VirtualAssistant",
  },
  {
    id: 2,
    name: "Currency Converter",
    image: currencyImg,
    technologies: "ReactJS",
    github:
      "https://github.com/Pankti734/InternshipRepo/tree/main/project_currency_coverter",
  },
  {
    id: 3,
    name: "Netflix clone",
    technologies: "HTML CSS JAVASCRIPT",
    image: netflixImg,
    github:
      "https://github.com/Pankti734/InternshipRepo/tree/main/netflix_clone",
  },
];

const Projects = () => {
  return (
    <>
      <div className="bg-black text-white py-20" id="Projects">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  src={project.image}
                  className="rounded-lg  mb-4 w-full h-48  object-cover"
                />
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.technologies}</p>
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full"
                >
                  Github
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
