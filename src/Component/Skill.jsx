import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 120, });

  }, []);
  const animations = ["flip-left"];

  const skills = [
    { name: "HTML", image: "/images/Html.webp" },
    { name: "CSS", image: "/images/css.jpeg" },
    { name: "Tailwind CSS", image: "/images/tailwind.jpeg" },
    { name: "JavaScript", image: "/images/js.jpeg" },
    { name: "React.js", image: "/images/React.jpeg" },
    { name: "Next.js", image: "/images/next.jpeg" },
    { name: "Node.js", image: "/images/node.jpeg" },
    { name: "Express.js", image: "/images/Express.jpeg" },
    { name: "MongoDB", image: "/images/mongodb.jpg" },
    { name: "SQL", image: "/images/sql.jpeg" },
    { name: "GitHub", image: "/images/github.jpeg" },
    { name: "Core Java", image: "/images/java.jpeg" },
  ];
  
  return(
    <section className="bg-gradient-to-r from-cyan-600 via-teal-500 to-indigo-900 min-h-screen    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-bold text-white text-center mb-6">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4 transform transition-transform duration-500 ease-in-out hover:scale-105 w-32 sm:w-36 md:w-40"
                data-aos={animations[index % animations.length]}  
           >
              <img
                src={skill.image}
                alt={skill.name}
                className={`w-20 h-20 object-contain mb-4 ${skill.name === "React.js" ? "animate-circle" : ""}`}
              />
              <span className=" text-black font-semibold text-sm md:text-base px-4 py-2 rounded-full text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill
