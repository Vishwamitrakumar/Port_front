import React from 'react'
import { Link } from 'react-router-dom';
const Main_Page = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-700 to-blue-900">
      <section className="min-h-[100vh] flex items-center justify-center text-gray-100 px-6 ">
        <div className="max-w-3xl text-center ">
          <h1 className="text-2xl sm:text-5xl font-extrabold  " >
            <p className='name'> VISHWAMITRA KUMAR SINGH </p>

            <span className="text-blue-400 ">MERN Stack Developer</span>
          </h1>
          <p className="mt-4 text-gray-300">
            I design and ship clean, scalable web apps with React, Node.js, Express, and MongoDB.
          </p>
          <p className="mt-2 text-gray-400 ">
            Performance-focused UIs, robust APIs, and production-ready tooling.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center sm:mt-12px">
            <Link to="https://airbnb-website-clone-git-main-vishwamitra-kumar-singhs-projects.vercel.app/listings" className="px-6 py-2 text-white font-semibold rounded-lg 
  bg-gradient-to-r from-blue-500 to-indigo-500 
  hover:from-indigo-800 hover:to-blue-500 transition-all duration-500">View Projects</Link>
            <a href="/images/VISHWAMITRA_KUMAR_SINGH_RESUME.pdf" className="px-6 py-2 text-white font-semibold rounded-lg 
  bg-gradient-to-r from-blue-500 to-purple-500 
  hover:from-purple-500 hover:to-blue-500 transition-all duration-50">Download Resume</a>
            <Link to="/contact" className="px-6 py-2 text-white font-semibold rounded-lg 
  bg-gradient-to-r from-blue-500 to-cyan-500 
  hover:from-cyan-500 hover:to-blue-500 transition-all duration-500">Contact Me</Link>
          </div>
          <div className="mt-6  text-gray-300  ">
            · HTML · CSS · JavaScript · React.js · Next.js · Node.js · Express · MongoDB · SQL · Tailwind · Git
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main_Page;
