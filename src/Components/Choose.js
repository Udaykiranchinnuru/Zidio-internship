// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Details</div>
        <div className="space-x-4">
          <a href="/Personal" className="text-gray-300 hover:text-white">Personal Info</a>
          <a href="/Work" className="text-gray-300 hover:text-white">Work Experience</a>
          <a href="/Education" className="text-gray-300 hover:text-white">Education</a>
          <a href="/Achievements" className="text-gray-300 hover:text-white">Achievements</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
