import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [navBackground, setNavBackground] = useState('bg-white/40');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground('bg-black shadow-lg');
      } else {
        setNavBackground('bg-white/40');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="ubuntu-regular text-gray-900 max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">Guillermo Arechiga .</h1>
        <div className="hidden md:flex space-x-6">
          <Link to="/home" className="cursor-pointer hover:text-gray-600">Home</Link>
          <Link to="/about" className="cursor-pointer hover:text-gray-600">About</Link>
          <Link to="/projects" className="cursor-pointer hover:text-gray-600">Projects</Link>
          <Link to="/contact" className="cursor-pointer hover:text-gray-600">Contact</Link>
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
          <Link to="/home" className="cursor-pointer py-2 w-full text-center text-white hover:bg-gray-700">Home</Link>
          <Link to="/about" className="cursor-pointer py-2 w-full text-center text-white hover:bg-gray-700">About</Link>
          <Link to="/projects" className="cursor-pointer py-2 w-full text-center text-white hover:bg-gray-700">Projects</Link>
          <Link to="/contact" className="cursor-pointer py-2 w-full text-center text-white hover:bg-gray-700">Contact</Link>
        </div>
      )}
    </nav>
  );
};