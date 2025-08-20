import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-around items-center md:items-start space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">Contact</h3>
            <p className="text-gray-400 mt-2">Address : Jaipur Pratap Nagar</p>
            <p className="text-gray-400 mt-2">Email : kumarvishwamitra14@gmail.com</p>
            <p className="text-gray-400 mt-2">Phone No : 7281828802</p>
          </div>

          <div className="flex space-x-4 ">
            <a href="https://github.com/Vishwamitrakumar" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-500 transition ">
              <img src="/images/github.jpeg" alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/vishwamitra-kumar-singh/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <img src="/images/linkdin.jpeg" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://x.com/VISHWAMITR85272?t=Q0mD8jtBIDTznqJ0Z9ydWw&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <img src="/images/x.jpeg" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="https://t.me/Vishwamitra_Kumar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <img src="/images/telegram.jpeg" alt="Twitter" className="w-6 h-6" />
            </a>
          </div>

        </div>

        
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
