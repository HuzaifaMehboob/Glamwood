import React from 'react';
import pingky from'../../Assets/Images/productsection/pingky.png'
import respira from '../../Assets/Images/productsection/respira.png'
import muggo from '../../Assets/Images/productsection/muggo.png'
import potty from '../../Assets/Images/productsection/potty.png'
import bedroom from '../../Assets/Images/bedroom.png'

const products = [
  { id: 1, name: "White Minimalist Combo Sofa", image:muggo , span: false },
  { id: 2, name: "Modern Stylish Single Sofa", image: pingky, span: false },
  { id: 3, name: "Larger Minimal Wooden Chair", image: potty, span: true },
  { id: 4, name: "Family Package Sofa Set", image:respira, span: false },
  { id: 5, name: "White Minimalist Combo Sofa", image: bedroom, span: false },
];

function FurnitureGallery() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-10">
      <div className="grid grid-cols-3 gap-6 w-11/12 max-w-screen-lg">
        {products.map((product) => (
          <div
            key={product.id}
            className={`bg-white rounded-lg shadow-lg text-center ${
              product.span ? "row-span-2" : ""
            }`}
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-md" />
            {/* <h2 className="text-lg font-semibold">{product.name}</h2> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FurnitureGallery;

