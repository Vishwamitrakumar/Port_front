import React from 'react'
import { useState } from 'react';
import { useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
const Contant = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 120, });

  }, []);



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) tempErrors.email = "Invalid email";
    if (!formData.phone) tempErrors.phone = "Phone is required";
    else if (!phoneRegex.test(formData.phone)) tempErrors.phone = "Invalid phone number";
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted", formData);
      alert("Form submitted successfully!");
      axios.post("https://my-portfolio-867h.onrender.com/user", formData, {
        withCredentials: true
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-700 to-blue-900 p-4" >
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg"
        data-aos="flip-left"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Contact Us</h2>


        <div className="mb-4"  >
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder='Entre your Name'
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder='Phone Number'
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            placeholder="Message..."
            onChange={handleChange}
            rows="4"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? "border-red-500" : "border-gray-300"
              }`}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full px-6 py-2 text-white font-semibold rounded-lg 
          bg-gradient-to-r from-blue-500 to-cyan-500 
          hover:from-cyan-500 hover:to-blue-500 transition-all duration-500 hover:bg-blue-700 cursor-pointer transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contant;
