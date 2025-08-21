import React from 'react'
import "../App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 120, });

  }, []);

  const animations = ["flip-left"];
  const projects = [
    {
      title: "Airbnb Clone",
      description: "A fully responsive MERN stack Airbnb clone featuring user authentication, property listings, and booking functionality.",
      image: "/images/aitbnb_image.jpg",
      link: "https://airbnb-website-clone-git-main-vishwamitra-kumar-singhs-projects.vercel.app/listings",
    },
    {
      title: "E-commerce Next.js",
      description: "A full-stack E-commerce app built with Next.js, integrating product listing, cart, and checkout functionality.",
      image: "/images/ecomerce.jpeg",
      link: "https://next-js-project-using-database.vercel.app/",
    },

    {
      title: "Weather App",
      description: "React + JavaScript Weather App using Weather API.",
      image: "/images/wheather.png",
      link: "https://weather-wave-app.vercel.app/",
    },
    {
      title: "To-Do List",
      description: "A simple task management app with CRUD functionality.",
      image: "/images/todo.jpeg",
      link: "https://to-do-list-vs.vercel.app/",
    },
    {
      title: "Spotify Clone",
      description: "A responsive Spotify clone built with HTML, CSS, and JavaScript.",
      image: "/images/Spofity.jpeg",
      link: "https://spotify-clone-moves.vercel.app/",
    },
    {
      title: "Calculator",
      description: "A clean, responsive calculator app built with JavaScript and Boostrap CSS with basic arithmetic operations.",
      image: "/images/calculator.jpg",
      link: "https://calculator-add.vercel.app/",
    },
  ];

  return (
    <section className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">My Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"  >
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-105 mx-auto sm:mx-auto md:mx-auto  project_card"
              data-aos={animations[index % animations.length]}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-80 h-48 object-cover p-2 rounded-2xl "
              />
              <div className="p-2 pl-6">
                <h3 className="text-xl  text-black font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2  text-white font-semibold rounded-lg 
                bg-gradient-to-r from-blue-500 to-cyan-500 
                hover:from-cyan-500 hover:to-blue-500 transition-all duration-500 hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project;
