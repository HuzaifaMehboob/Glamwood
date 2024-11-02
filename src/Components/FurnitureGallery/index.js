import React from 'react';
import pingky from '../../Assets/Images/productsection/pingky.png';
import respira from '../../Assets/Images/productsection/respira.png';
import muggo from '../../Assets/Images/productsection/muggo.png';
import potty from '../../Assets/Images/productsection/potty.png';
import office from '../../Assets/Images/office.jpg';
import outdoor from '../../Assets/Images/outdoor.jpg';
import livingroom from '../../Assets/Images/livingroom.jpg';
import kitchen from '../../Assets/Images/kitchen.jpg';
import kitchen1 from '../../Assets/Images/kitchen1.jpg';
import bedroom from '../../Assets/Images/bedroom.jpg';

const products = [
  { id: 1, name: "White Minimalist Combo Sofa", image: livingroom, span: false },
  { id: 2, name: "Modern Stylish Single Sofa", image: office, span: false },
  { id: 3, name: "Larger Minimal Wooden Chair", image: kitchen1 , span: true },
  { id: 4, name: "Family Package Sofa Set", image: outdoor, span: false },
  { id: 5, name: "White Minimalist Combo Sofa", image: bedroom, span: false },
];

function FurnitureGallery() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  mt-10">
      {/* Centered Heading */}
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        Explore Our Collections
      </h2>
      
      <div className="grid grid-cols-2 gap-4 w-8/12 max-w-screen-lg">
        {products.map((product) => (
          <div
            key={product.id}
            className={`bg-white rounded-lg shadow-lg text-center overflow-hidden ${
              product.span ? "row-span-2 h-[455px]" : "h-[220px]"
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FurnitureGallery;
