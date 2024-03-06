import React, { useState } from 'react';
import  logo  from "../assets/logo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm shadow-black/10 px-14">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Icon on the left */}
            <div className="flex-shrink-0 flex items-center">
            <img className='w-1/5' src={logo}/>

            </div>
          </div>
          {/* Responsive Collapse */}
          <div className="hidden md:flex items-center px-12">
            {/* Buttons on the right */}
            <div className="ml-10 flex items-baseline space-x-4">
              <button className="text-black  px-2 mx-1 py-2 hover:bg-blue-200 focus:text-white focus:bg-blue-600 rounded-md text-sm font-medium">
                Crypto Taxes
              </button>
              <button className="text-black  px-2 mx-1 py-2 hover:bg-blue-200 focus:text-white focus:bg-blue-600 rounded-md text-sm font-medium">
                Free Tools
              </button>
              <button className="text-black  px-2 mx-1 py-2 hover:bg-blue-200 focus:text-white focus:bg-blue-600 rounded-md text-sm font-medium">
                Resourse center
              </button>
              <button className="text-black  px-2 mx-1 py-2 hover:bg-blue-200 focus:text-white focus:bg-blue-600 rounded-md text-sm font-medium">
                Get Started
              </button>
            </div>
          </div>
          {/* Responsive Menu Button */}
          <div className="md:hidden flex -mr-2 items-center">
            <button
              onClick={toggleMenu}
              className="text-black  px-2 mx-1 py-2 hover:bg-blue-200 focus:text-white focus:bg-blue-600 rounded-md text-sm font-medium"
            >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

            </button>
          </div>
        </div>
      </div>
      {/* Responsive Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button className="text-black hover:bg-blue-200 focus:text-white focus:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium">
            Crypto Taxes
            </button>
            <button className="text-black hover:bg-blue-200 focus:text-white focus:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium">
            Free Tools
            </button>
            <button className="text-black hover:bg-blue-200 focus:text-white focus:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium">
            Resourse center
            </button>
            <button className="text-black hover:bg-blue-200 focus:text-white focus:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium">
            Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
