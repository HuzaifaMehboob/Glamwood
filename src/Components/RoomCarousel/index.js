// RoomCarousel.js
import React, { useState } from 'react';

const RoomCarousel = ({ rooms }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === rooms.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? rooms.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full h-full">
      {rooms.map((room, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={room.image} alt={room.title} className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-6 left-6 bg-white bg-opacity-75 p-4 rounded">
            <p className="text-sm font-semibold text-gray-600">{room.roomType}</p>
            <h3 className="text-lg font-bold">{room.title}</h3>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &#10095;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {rooms.map((_, idx) => (
          <div
            key={idx}
            className={`w-2.5 h-2.5 rounded-full ${
              idx === current ? 'bg-yellow-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomCarousel;
