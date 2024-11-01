// ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
      {/* Product Image */}
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />

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
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.description}</p>
        <div className="flex items-center mt-2">
          <span className="text-lg font-bold text-gray-900">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through ml-2">
              {product.originalPrice}
            </span>
          )}
        </div>
      </div>

      {/* Hover Overlay with Actions */}
      <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">Add to cart</button>
        <div className="flex items-center space-x-4 ml-4 text-white">
          <button>Share</button>
          <button>Compare</button>
          <button>Like</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
