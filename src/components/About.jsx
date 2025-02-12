import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div
      className="text-white min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-6 md:px-12 relative"
      style={{ backgroundImage: "url('/memo.jpg')" }}
    >
      {/* Background overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-85"></div>

      <div className="w-full flex justify-center p-12 transition-transform duration-300 mx-4 relative z-10">
        {/* About Me Card */}
        <div className="relative z-10 text-center mt-6 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
            About Me
          </h1>
          <p className="text-lg md:text-xl mb-4 font-light hover:scale-105">
            Adaptable and collaborative professional with a passion for solving
            complex problems through code. My experience in full-stack
            development allows me to create efficient, scalable, and
            user-friendly applications.
          </p>
          <p className="text-lg md:text-xl mb-4 font-light hover:scale-105">
            I specialize in designing and building modern web applications using
            JavaScript, Python, React, FastAPI, Tailwind, and AWS. With
            expertise in both SQL and NoSQL databases, I aim to optimize
            performance and enhance user experience.
          </p>
          <p className="text-lg md:text-xl mb-6 font-light hover:scale-105">
            My strong communication skills, problem-solving abilities, and
            self-motivated approach make me a valuable team player.
          </p>
          <div className="flex justify-center space-x-6 md:space-x-10 lg:space-x-14 mt-8 hover:scale-105">
            <Link to="/github" className="text-blue-400 hover:underline">
              <img src="/github.png" alt="github" className="filter invert" />
              GitHub
            </Link>

            <Link to="/hackerrank" className="text-blue-400 hover:underline">
            <img src="/hackerrank.png" alt="github" className="filter invert" />
              HackerRank
            </Link>
            <Link to="/linkedin" className="text-blue-400 hover:underline">
            <img src="/linkedin.png" alt="github" className="filter invert" />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
