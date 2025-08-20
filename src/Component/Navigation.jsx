import React, { useState } from "react";
import {Link} from "react-router-dom";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 fixed  left-0 w-full  shadow-lg z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
      
          <div className="flex-shrink-0 text-xl font-bold  w-22  p-2  text-center rounded-4xl">
          <img src="/images/logo.jpeg" />
          </div>

        
          <div className="hidden lg:flex space-x-6 text-gray-100 hover:text-blue-400">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/project" className="hover:text-gray-300">Project</Link>
            <Link to="/skills" className="hover:text-gray-300">Skills</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>

          
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white focus:outline-none text-2xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

    
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2 bg-gray-800 text-gray-100 hover:text-blue-400">
          <Link to="/" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/project" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Project</Link>
          <Link to="/skills" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/about" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
