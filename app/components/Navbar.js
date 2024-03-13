import React from 'react';

//Tailwind structuring and layout of the top navigation bar
const Navbar = () => {
    return (
      <nav className="p-4 w-full">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <span className="text-slate-300 text-4xl font-extrabold font-astronomical underline underline-offset-8">
          New Generation
          </span>
          <span className="text-gray-400 text-2xl mt-1 font-astronomical">
          High School 
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
