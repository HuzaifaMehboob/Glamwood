import React from 'react';
import RoomCarousel from '../RoomCarousel';
const RoomInspirationSection = () => {
    

  return (
    <div className="flex flex-col lg:flex-row items-center bg-gray-100 py-12 px-6 lg:px-20">
      {/* Text Section */}
      <div className="lg:w-1/3 mb-8 lg:mb-0">
        <h2 className="text-5xl font-semibold mb-4">50+<br/>Beautiful Rooms Inspiration</h2>
        <p className="text-gray-600 mb-6">
          Our designer already made a lot of beautiful prototype of rooms that inspire you
        </p>
        <button className="bg-gray-500 text-white px-6 py-2 rounded shadow hover:bg-yellow-600 transition">
          Explore More
        </button>
      </div>

      {/* Carousel Section */}
      <div className="lg:w-2/3 w-full lg:pl-8">
        <RoomCarousel  />
      </div>
    </div>
  );
};

export default RoomInspirationSection;
