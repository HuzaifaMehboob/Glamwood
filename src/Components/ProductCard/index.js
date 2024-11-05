// ProductCard.js
import React, { useState } from 'react';
import { FaCartArrowDown } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [heart, setheart] = useState(false);
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
      {/* Product Image */}
      <img src={product.image} alt={product.name} className="w-full xs:h-32 h-48 object-cover" />

      {/* New or Discount Badge */}
      {product.isNew && (
        <span className="absolute top-2 right-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          New
        </span>
      )}
      {product.discount && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          -{product.discount}%
        </span>
      )}

      {/* Product Info */}
      <div className="py-4 px-4 xs:px-4 xs:py-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.description}</p>
        <div className="flex items-center mt-2">
          <span className="text-lg xs:text-base font-bold text-gray-900">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through ml-2">
              {product.originalPrice}
            </span>
          )}
        </div>
      </div>

      {/* Hover Overlay with Actions */}
      <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <div className="flex items-center space-x-4 ml-4 text-white">
          <button className="hover:bg-gray-100 hover:text-black text-white p-3 rounded"><FaCartArrowDown size={20}/></button>
          <button className="hover:bg-gray-100 hover:text-black text-white p-3 rounded"><IoShareSocialSharp size={20}/></button>
          <button className="hover:bg-gray-100 hover:text-black text-white p-3 rounded" onClick={()=>setheart(true)}>{heart ? <FaHeart size={20} /> : <FaRegHeart size={20}/> }</button>
         
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
