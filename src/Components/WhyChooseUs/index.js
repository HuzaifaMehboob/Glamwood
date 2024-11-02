import React from 'react';
import { BsGlobe2 } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuPhoneCall } from "react-icons/lu";
import { RiSecurePaymentLine } from "react-icons/ri";

const WhyChooseUs = () => {
  return (
    <div className="text-center py-12 px-4 md:px-20 bg-gray-50">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">WHY CHOOSE US?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Global Delivery */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <BsGlobe2 size={36} className="text-gray-600 mb-4" />
          <h3 className="font-semibold text-lg mt-3 text-gray-800">GLOBAL DELIVERY</h3>
          <p className="text-gray-700 mt-2">Fast, worldwide shipping to your doorstep.</p>
        </div>

        {/* Free Shipping */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <LiaShippingFastSolid size={36} className="text-gray-600 mb-4" />
          <h3 className="font-semibold text-lg mt-3 text-gray-800">FREE SHIPPING</h3>
          <p className="text-gray-700 mt-2">Enjoy free delivery on all orders.</p>
        </div>

        {/* 24/7 Support */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <LuPhoneCall size={36} className="text-gray-600 mb-4" />
          <h3 className="font-semibold text-lg mt-3 text-gray-800">24/7 SUPPORT</h3>
          <p className="text-gray-700 mt-2">We're here to help, anytime.</p>
        </div>

        {/* Easy Payment */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <RiSecurePaymentLine size={36} className="text-gray-600 mb-4" />
          <h3 className="font-semibold text-lg mt-3 text-gray-800">EASY PAYMENT</h3>
          <p className="text-gray-700 mt-2">Secure and flexible payment options.</p>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
