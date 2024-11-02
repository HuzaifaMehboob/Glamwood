import React from 'react';
import living from '../../Assets/Images/livingroom.jpg';
import hospital1 from '../../Assets/Images/hospital_1.jpg';
import hospital2 from '../../Assets/Images/hospital_2.jpg';
import kitchen from '../../Assets/Images/kitchen1.jpg';

const SignatureCollection = () => {
  return (
    <div className="bg-gray-50 py-16 px-8 flex flex-col items-center space-y-16">
      {/* Residential Section */}
      <div className="w-full  max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Discover Our Signature Collections</h2>
          <p className="text-lg text-gray-500 mt-2 max-w-lg mx-auto">
            Welcome to our luxurious furniture brand, where modern design meets uncompromising quality.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={kitchen}
              alt="Residential Furniture" 
              className="w-full h-full object-cover" // Adjusted height here
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8">
            <h3 className="text-5xl font-bold text-gray-800">Modern Living Spaces</h3>
            <p className="text-gray-500 leading-loose text-lg ">
            Discover a curated collection of stylish, contemporary furniture that transforms your living space into a sophisticated retreat. From vibrant sofas and sleek coffee tables to chic decor, each piece is crafted to enhance both comfort and style. Explore our selection to find unique furniture that fits your vision of a perfect home.</p>
            <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 mt-4 w-fit">
              Explore Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full  max-w-5xl">
        
        <div className="flex flex-col md:flex-row-reverse gap-8">
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={hospital1}
              alt="Residential Furniture" 
              className="w-full h-full object-cover" // Adjusted height here
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8">
            <h3 className="text-5xl font-bold text-gray-800">Elegant Minimalism Collection</h3>
            <p className="text-gray-500 leading-loose text-lg">
            Embrace the beauty of simplicity with our Elegant Minimalism Collection. Featuring refined furniture pieces like this plush mauve accent chair, complemented by a chic marble side table and a brass floor lamp, each element is designed to bring a touch of luxury to your space. Perfect for those who appreciate understated elegance, this collection merges comfort with style, making it ideal for modern and minimalist interiors. Let your space speak sophistication with thoughtfully curated pieces that elevate any room.</p>
            <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 mt-4 w-fit">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      {/* Hospitality Section */}
      {/* <div className="w-full max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section with Caption and Image 
          <div className="w-full md:w-1/2 flex flex-col items-center rounded-lg overflow-hidden ">
            <div className="text-left mb-8">
              <h3 className="text-5xl font-bold text-gray-800">Hospitality Designs</h3>
              <p className="text-lg text-gray-500 mt-2 max-w-lg">
                Elevate your hospitality spaces with our Hospitality Collection, where sophisticated elegance and functional versatility converge.
              </p>
            </div>
            <img 
              src={hospital1}
              alt="Hospitality Furniture with Caption" 
              className="w-full h-full object-cover rounded-lg" // Adjusted height here
            />
          </div>

          
          <div className="w-full md:w-1/2  rounded-lg overflow-hidden">
            <img 
              src={hospital2}
              alt="Hospitality Furniture Without Caption" 
              className="w-full h-9/10 object-center rounded-lg" // Adjusted height here
            />
          
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SignatureCollection;
