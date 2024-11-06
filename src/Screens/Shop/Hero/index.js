import React from 'react';
import livingroom from '../../../Assets/Images/livingroom.jpg'
import { BsFilterRight } from "react-icons/bs";
const ShopPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="relative bg-cover bg-center bg-center h-60" style={{ backgroundImage: `url(${livingroom})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-900">Shop</h1>
          <p className="text-gray-600 mt-1">
            <span>Home</span> <span className="mx-2"> &gt; </span> <span>Shop</span>
          </p>
        </div>
      </div>

      {/* Filter and Sort Section */}
      <div className="min-w-screen mx-auto px-4 py-6 flex items-center justify-between bg-gray-50 rounded-lg shadow-sm ">
        {/* Left Section (Filter & Layout Options) */}
        <div className="flex items-center space-x-4">
        <button className="p-2 rounded text-gray-700 ">
            <span className="material-icons text-lg font-semibold">Men's Apparel</span>
          </button>
          
          
          {/* <button className="p-2 rounded bg-gray-200 text-gray-700 focus:ring-2 ring-gray-400">
            <span className="material-icons">view_module</span>
          </button> */}
          
          <p className="text-gray-600">Showing 1–16 of 32 results</p>
        </div>

        {/* Right Section (Show Count & Sort Options) */}
        <div className="flex items-center space-x-4">
            
        <button className="flex items-center space-x-2 text-gray-700">
            <span ><BsFilterRight /></span>
            <span className='font-base text-black text-base'>Filter</span>
          </button>

          {/* <div className="flex items-center space-x-2">
            <span>Page</span>
            <input type="number" className="w-16 p-1 border rounded text-center" value={16} />
          </div> */}
          <div className="flex items-center space-x-2">
            <span>Sort by</span>
            <select className="p-1 border rounded">
              <option value="default">Default</option>
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
              <option value="latest">Latest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
