import React from "react";
// import hero from '../../Assets/Images/hero.png';
import hero from '../../Assets/Images/hero/bg_hero.jpg'

const HeroSection = () => {
  return (
    <section className="relative w-screen h-[70vh] md:h-[90vh] bg-gray-50">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Decorative furniture"
          className="w-full h-full object-cover"
        />
      </div>

      
       <div className="relative z-10 flex items-center justify-start h-full">
        <div className=" bg-opacity-90 py-4 px-20 md:p-12 rounded-lg shadow-lg max-w-md ">
          <p className="text-md uppercase font-semibold text-gray-600 mb-2">New Arrival</p>
          <h1 className="text-5xl md:text-5xl font-bold text-white mb-4">
            Discover Our <br /> New Collection
          </h1>
          <p className="text-white mb-6 text-sm">
            Discover our new collection — where timeless elegance meets modern design. Crafted with care and inspired by comfort, each piece brings warmth and sophistication to your home.
          </p>
          <button className="text-white border-white border-2 px-6 py-2 rounded-md font-semibold hover:bg-yellow-700 transition duration-200">
            Buy Now
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
