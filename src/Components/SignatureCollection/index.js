import React from 'react';
import living from '../../Assets/Images/livingroom.jpg'
import hospital1 from '../../Assets/Images/hospital_1.jpg'
import hospital2 from '../../Assets/Images/hospital_2.jpg'
import kitchen from '../../Assets/Images/kitchen1.jpg'

const SignatureCollection = () => {
  return (
    <div className="bg-gray-50 py-16 px-8 flex flex-col items-center space-y-16">
      {/* Residential Section */}
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Discover Our Signature Collections</h2>
          <p className="text-lg text-gray-500 mt-2 max-w-lg mx-auto">
            Welcome to our luxurious furniture brand, where modern design meets uncompromising quality.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
            <img 
              src= {kitchen}
              alt="Residential Furniture" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
            <h3 className="text-3xl font-bold text-gray-800">Residential</h3>
            <p className="text-gray-500">
              Immerse yourself in our Residential Collection, where timeless elegance meets contemporary flair. Crafted with meticulous attention to detail, our expertly designed pieces seamlessly blend form and function, creating a harmonious living environment that invites you to relax and unwind.
            </p>
            <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 mt-4 w-fit">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      {/* Hospitality Section */}
      <div className="w-full max-w-6xl">
        {/* Title and Subtitle */}
        
        
        {/* Main Content Div - Split into Left and Right Sections */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left Section with Caption and Image */}
          <div className="w-full md:w-1/2 flex flex-col items-center rounded-lg overflow-hidden ">
          <div className="text-left mb-8">
          <h3 className="text-4xl font-bold text-gray-800">Hospitality Designs</h3>
          <p className="text-lg text-gray-500 mt-2 max-w-lg">
            Elevate your hospitality spaces with our Hospitality Collection, where sophisticated elegance and functional versatility converge.
          </p>
        </div>
            <img 
              src= {hospital1}
              alt="Hospitality Furniture with Caption" 
              className="w-full h-full object-cover"
            />
            {/* <div className="bg-white p-4 mt-4 rounded shadow-md text-center max-w-xs">
              <p className="text-gray-800 font-semibold">ZYORISMILK Collection</p>
              <p className="text-gray-500 text-sm">Timeless design and versatile charm to elevate hospitality spaces.</p>
            </div> */}
          </div>

          {/* Right Section with Just the Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center rounded-lg overflow-hidden shadow-lg">
            <img 
              src= {hospital2}
              alt="Hospitality Furniture Without Caption" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureCollection;




