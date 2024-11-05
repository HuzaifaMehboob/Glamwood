// ProductSection.js
import React from 'react';
import ProductCard from '../ProductCard';

const ProductSection = ({ products }) => {
  return (
    <div className="py-10 flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-4xl font-semibold">Our Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-2 xs:px-2 sm:px-2 md:px-2  mt-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Show More Button */}
      <button className="mt-6 px-6 py-2 border border-gray-500 border-2 text-gray-500 rounded hover:bg-gray-500 hover:text-white transition">
        Show More
      </button>
    </div>
  );
};

export default ProductSection;
