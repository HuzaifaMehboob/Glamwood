import React from "react";
import hero from '../../Assets/Images/hero.png';

const HeroSection = () => {
  return (
    <section className="relative w-screen h-[80vh] md:h-screen bg-gray-50">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Decorative furniture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Box */}
      <div className="relative z-10 flex items-center justify-end right-32 top-16 h-full">
        <div className="bg-yellow-100 bg-opacity-90 py-4 px-20 md:p-12 rounded-lg shadow-lg max-w-md ">
          <p className="text-sm uppercase font-semibold text-gray-600 mb-2">New Arrival</p>
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-4">
            Discover Our <br /> New Collection
          </h1>
          <p className="text-gray-700 mb-6">
            Discover our new collection — where timeless elegance meets modern design. Crafted with care and inspired by comfort, each piece brings warmth and sophistication to your home.
          </p>
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-700 transition duration-200">
            Buy Now
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
