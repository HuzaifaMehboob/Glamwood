import React from 'react';
import { FaUser, FaHeart, FaShoppingBag, FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-200 bg-white shadow-sm">
      {/* Left Section: Logo */}
      <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-800">
        Glamwood
      </h1>

      {/* Right Section: Icons and Search Bar */}
      <div className="flex items-center space-x-4 md:space-x-6 text-gray-600">
        {/* Search Icon for Small Screens */}
        <button className="text-gray-500 block md:hidden">
          <AiOutlineSearch className="text-xl" />
        </button>

        {/* Full Search Bar for Medium Screens and Up */}
        <div className="hidden md:flex relative w-48 lg:w-64">
          <input
            type="text"
            placeholder="Search Anything..."
            className="w-full px-4 py-2 text-sm text-gray-700 placeholder-gray-500 border border-gray-300 rounded-full focus:outline-none focus:border-gray-400 shadow-sm"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
            <AiOutlineSearch />
          </button>
        </div>

        {/* Icons */}
        <FaUser className="hidden sm:block cursor-pointer text-lg md:text-xl hover:text-gray-800" />
        <div className="relative cursor-pointer text-lg md:text-xl hover:text-gray-800">
          <FaHeart />
          <span className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 text-xs font-semibold text-white bg-brown-600 rounded-full flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">0</span>
        </div>
        <div className="relative cursor-pointer text-lg md:text-xl hover:text-gray-800">
          <FaShoppingBag />
          <span className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 text-xs font-semibold text-white bg-brown-600 rounded-full flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">0</span>
        </div>
        <FaBars className="cursor-pointer text-lg md:text-xl hover:text-gray-800" />
      </div>
    </header>
  );
};

export default Header;
