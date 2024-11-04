import React from "react";
import image1 from '../../Assets/Images/Home.png';
import image2 from '../../Assets/Images/About.png';

const GallerySection = () => {
  return (
    <section className="relative my-10 overflow-hidden h-[40vh] xs:h-[60vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh]">
      {/* Text and overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div> {/* Light overlay */}
      <h3 className="absolute text-center text-5xl font-semibold text-white z-20 w-full top-[40%]">
        #FurnieFurniture
      </h3>
      
      {/* Sliding images */}
      <div className="relative overflow-hidden w-full h-full">
        <div className="flex animate-slideLeft h-full">
          {/* Image loop */}
          <img src={image1} alt="Furniture 1" className="w-1/2 h-full object-cover" />
          <img src={image2} alt="Furniture 2" className="w-1/2 h-full object-cover" />
          <img src={image1} alt="Furniture 1" className="w-1/2 h-full object-cover" />
          <img src={image2} alt="Furniture 2" className="w-1/2 h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
