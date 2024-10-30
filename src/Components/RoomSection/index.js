import React from 'react';
import RoomCarousel from '../RoomCarousel';
import bedroom from '../../Assets/Images/bedroom.png';
import living from '../../Assets/Images/living.png';
import dining from '../../Assets/Images/dining.png';

const RoomInspirationSection = () => {
    const rooms = [
        {
          image: require('../../Assets/Images/bedroom.png'),
          roomType: '01 — Bed Room',
          title: 'Inner Peace',
        },
        {
          image: require('../../Assets/Images/living.png'),
          roomType: '02 — Living Room',
          title: 'Cozy Comfort',
        },
        {
          image: require('../../Assets/Images/dining.png'),
          roomType: '03 — Dining Room',
          title: 'Modern Minimalism',
        },
      ];
    
      console.log('Rooms array:', rooms);  // Verify the image paths

  console.log('Rooms array:', rooms);  // Verify the image paths

  return (
    <div className="flex flex-col lg:flex-row items-center bg-gray-50 py-12 px-6 lg:px-20">
      {/* Text Section */}
      <div className="lg:w-1/3 mb-8 lg:mb-0">
        <h2 className="text-3xl font-semibold mb-4">50+ Beautiful rooms inspiration</h2>
        <p className="text-gray-600 mb-6">
          Our designer already made a lot of beautiful prototype of rooms that inspire you
        </p>
        <button className="bg-yellow-500 text-white px-6 py-2 rounded shadow hover:bg-yellow-600 transition">
          Explore More
        </button>
      </div>

      {/* Carousel Section */}
      <div className="lg:w-2/3 w-full lg:pl-8">
        <RoomCarousel rooms={rooms} />
      </div>
    </div>
  );
};

export default RoomInspirationSection;
