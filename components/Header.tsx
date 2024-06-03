'use client'
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <a href="/" className="text-xl font-bold">
          Laila Habibi
        </a>
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isOpen ? 'transform rotate-90' : ''
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
         
        </div>
        <div
          className={`md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <a href="/about" className="hover:text-gray-400 transition-colors duration-300">
            About
          </a>
          <a href="/projects" className="hover:text-gray-400 transition-colors duration-300">
            Projects
          </a>
          <a href="/contact" className="hover:text-gray-400 transition-colors duration-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;