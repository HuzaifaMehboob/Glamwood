import React from 'react';
import { FaTrophy, FaShieldAlt, FaTruck, FaHeadset } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaTrophy className="text-3xl text-gray-800" />,
      title: 'High Quality',
      description: 'Crafted from top materials',
    },
    {
      icon: <FaShieldAlt className="text-3xl text-gray-800" />,
      title: 'Warranty Protection',
      description: 'Over 2 years',
    },
    {
      icon: <FaTruck className="text-3xl text-gray-800" />,
      title: 'Free Shipping',
      description: 'Order over 150 $',
    },
    {
      icon: <FaHeadset className="text-3xl text-gray-800" />,
      title: '24/7 Support',
      description: 'Dedicated support',
    },
  ];

  return (
    <section className="py-8 bg-white mt-14">
      <div className="max-w-6xl mx-auto flex justify-around items-center space-x-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-2">
            {feature.icon}
            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
