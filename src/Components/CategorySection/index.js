import React from 'react';
import dining from '../../Assets/Images/dining.png'
import living from '../../Assets/Images/living.png'
import bedroom from '../../Assets/Images/bedroom.png'
const BrowseRange = () => {
  return (
    <div className="flex flex-col items-center py-10 mt-10">
      {/* Title Section */}
      <h2 className="text-4xl font-semibold">Browse The Range</h2>
      <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      {/* Categories Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8">
        {/* Dining */}
        <div className="flex flex-col items-center">
          <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
            {/* Replace with actual image source */}
            <img
              src={dining}
              alt="Dining"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <h3 className="text-lg font-medium mt-4">Dining</h3>
        </div>

        {/* Living */}
        <div className="flex flex-col items-center">
          <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
            {/* Replace with actual image source */}
            <img
              src={living}
              alt="Living"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <h3 className="text-lg font-medium mt-4">Living</h3>
        </div>

        {/* Bedroom */}
        <div className="flex flex-col items-center">
          <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
            {/* Replace with actual image source */}
            <img
              src={bedroom}
              alt="Bedroom"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <h3 className="text-lg font-medium mt-4">Bedroom</h3>
        </div>
      </div>
    </div>
  );
};

export default BrowseRange;
