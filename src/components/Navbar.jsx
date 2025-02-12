import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll

export const Navbar = () => {
  const [navBackground, setNavBackground] = useState('bg-white/40');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground('bg-white shadow-xl');
      } else {
        setNavBackground('bg-white/40');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false); // Function to close the menu

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="ubuntu-regular text-gray-900 max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">Guillermo Arechiga .</h1>
        <div className="hidden md:flex space-x-6">
          <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">About</ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">Projects</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">Contact</ScrollLink>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black text-2xl shadow-lg flex flex-col items-center justify-center py-4">
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
          >
            &#10005;
          </button>
          <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer py-2 w-full text-center text-white hover:bg-gray-700" onClick={closeMenu}>
            Home
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer py-2 w-full text-center text-white hover:bg-gray-700" onClick={closeMenu}>
            About
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} className="cursor-pointer py-2 w-full text-center text-white hover:bg-gray-700" onClick={closeMenu}>
            Projects
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer py-2 w-full text-center text-white hover:bg-gray-700" onClick={closeMenu}>
            Contact
          </ScrollLink>
        </div>
      )}
    </nav>
  );
};