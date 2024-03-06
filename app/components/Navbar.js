import React from 'react';


const Navbar = () => {
    return (
      <nav className="p-4 w-full">
        <div className="container mx-auto flex flex-col justify-left">
          <span className="text-gray-200 text-2xl font-extrabold font-astronomical">
            WEBDEV TECHNICAL SCHOOL
          </span>
          <span className="text-gray-300 text-sm mt-1 font-astronomical">
            for the Technologically Impaired 🌚
          </span>
        </div>
  
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
  
          .font-astronomical {
            font-family: 'Orbitron', sans-serif;
          }
        `}</style>
      </nav>
    );
};
  
  export default Navbar;
