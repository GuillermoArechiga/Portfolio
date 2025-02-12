import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API or email)
    alert("Message sent successfully!");
  };

  return (
    <div
      className="text-white min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-6 md:px-12 relative"
      style={{ backgroundImage: "url('/contact-background.jpg')" }}
    >
      {/* Background overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-85"></div>

      <div className="w-full flex justify-center p-12 transition-transform duration-300 mx-4 relative z-10">
        {/* Contact Form */}
        <div className="relative z-10 text-center mt-7 max-w-lg w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
            Contact Me
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 bg-transparent border-2 border-blue-400 rounded-lg text-white placeholder-white focus:outline-none focus:border-blue-600"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 bg-transparent border-2 border-blue-400 rounded-lg text-white placeholder-white focus:outline-none focus:border-blue-600"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 bg-transparent border-2 border-blue-400 rounded-lg text-white placeholder-white focus:outline-none focus:border-blue-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-400 text-white font-bold rounded-lg hover:bg-blue-500 hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};