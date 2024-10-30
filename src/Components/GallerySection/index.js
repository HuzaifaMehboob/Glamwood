import React from "react";

const GallerySection = () => {
  return (
    <section className="py-10">
      <h3 className="text-center text-3xl font-semibold mb-6">#FurnieFurniture</h3>
      <div className="grid grid-cols-4 gap-4">
        {/* Add images or placeholder divs */}
        <div className="h-40 bg-gray-200 rounded"></div>
        <div className="h-40 bg-gray-200 rounded"></div>
        <div className="h-40 bg-gray-200 rounded"></div>
        <div className="h-40 bg-gray-200 rounded"></div>
      </div>
    </section>
  );
};

export default GallerySection;
