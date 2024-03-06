import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 w-full">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <span className="text-white text-2xl font-extrabold">
          WEBDEV TECHNICAL SCHOOL🌚
        </span>
        <span className="text-gray-300 text-sm mt-1">
          for the Technologically Impaired
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
