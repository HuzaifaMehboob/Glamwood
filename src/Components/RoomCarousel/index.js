import React, { useState } from "react";
import living from '../../Assets/Images/livingroom.jpg';
import bedroom from '../../Assets/Images/bedroom.jpg';
import outdoor from '../../Assets/Images/outdoor.jpg';
import office from '../../Assets/Images/office.jpg';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const Carousel = () => {
  const slides = [
    { id: 1, title: "Inner Peace", subtitle: "Bedroom", image: living },
    { id: 2, title: "Modern Living", subtitle: "Living Room", image: bedroom },
    { id: 3, title: "Cozy Workspace", subtitle: "Home Office", image: outdoor },
    { id: 4, title: "Office Asthetics", subtitle: "Office Decor", image: office },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8 p-4">
      <div className="relative overflow-hidden h-80 rounded-lg">
        {/* Carousel items */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 w-full h-80 relative"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
                <h3 className="text-2xl font-bold">{slide.title}</h3>
                <p className="text-gray-300">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
      >
        <SlArrowLeft/>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
      >
        <SlArrowRight/>
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-yellow-500" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
