import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-yellow-600">▲</span> {/* Replace with the logo icon */}
        <span className="text-xl font-semibold text-gray-900">Furniro</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-gray-600">
        <a href="#" className="hover:text-gray-900">Home</a>
        <a href="#" className="hover:text-gray-900">Shop</a>
        <a href="#" className="hover:text-gray-900">About</a>
        <a href="#" className="hover:text-gray-900">Contact</a>
      </div>

      {/* Icons */}
      <div className="flex space-x-4">
        <IoIosSearch />
        
        <IoCartOutline/>
        
      </div>
    </nav>
  );
};

export default Navbar;
