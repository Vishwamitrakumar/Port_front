import React from 'react'
import "../App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 120, });

  }, []);
  return (
    <div>
      <section className="bg-gradient-to-r from-cyan-600 via-teal-800 to-indigo-900 min-h-screen">
        <div className="max-w-5xl mx-auto p-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center overflow-hidden "  data-aos="flip-left">
            <div className="flex justify-center ">
              <motion.img
                src="/images/VISHWAMITRA_IMAGE.jpeg"
                alt="Profile"
                className="rounded-2xl shadow-lg w-72 h-72 object-cover border-4 border-gray-700"

                whileHover={{
                  scale: 1.05,
                  rotate: 5,
                  filter: "grayscale(50%)",
                }}
                 />
            </div>


            <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg text-gray-300 shadow about_card"  data-aos="flip-left" >
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                Hi, I'm Vishwamitra Kumar Singh 👋
              </h3>
              <p className="mb-4 leading-relaxed">
                I’m a <span className="text-teal-400 font-medium">Full-Stack Developer </span>
                with expertise in building modern web applications using
                <span className="text-teal-400"> React.js, Next.js, Node.js, Express,</span>
                and <span className="text-teal-400">MongoDB</span>.
              </p>
              <p className="mb-4 leading-relaxed">
                Passionate about creating user-friendly, scalable, and efficient digital
                experiences. I also have a solid foundation in
                <span className="text-teal-400"> Core Java, SQL, and DSA</span>.
              </p>
              <p className="leading-relaxed">
                Outside coding, I enjoy solving real-world problems, contributing to open-source,
                and continuously learning new technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
