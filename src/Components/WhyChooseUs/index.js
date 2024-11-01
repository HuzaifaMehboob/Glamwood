import React from 'react';
import { BsGlobe2 } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineDiscount } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <div className="text-center py-12 px-4 md:px-20">
      <h2 className="text-2xl font-bold mb-8">WHY CHOOSE US?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Global Delivery */}
        <div className="flex flex-col items-center text-center">
          {/* <img src="path_to_global_delivery_icon.png" alt="Global Delivery Icon" className="w-12 h-12 mb-4" /> */}
          <BsGlobe2 size={32}/>
          <h3 className="font-semibold text-lg mt-3">GLOBAL DELIVERY</h3>
          <p className="text-gray-600 mt-2">
            Experience hassle-free shipping and seamless global connectivity with our trustworthy and efficient delivery service, bringing the world to your fingertips!
          </p>
        </div>

        {/* Free Shipping */}
        <div className="flex flex-col items-center text-center">
          {/* <img src="path_to_free_shipping_icon.png" alt="Free Shipping Icon" className="w-12 h-12 mb-4" /> */}
          <LiaShippingFastSolid size={32}/>
          <h3 className="font-semibold text-lg  mt-3">FREE SHIPPING</h3>
          <p className="text-gray-600 mt-2">
            Shop to your heart’s content without worrying about shipping costs. Our free shipping service delivers your purchases with a smile, straight to your doorstep!
          </p>
        </div>

        {/* 24/7 Supporting */}
        <div className="flex flex-col items-center text-center">
          {/* <img src="path_to_24_7_supporting_icon.png" alt="24/7 Supporting Icon" className="w-12 h-12 mb-4" /> */}
          <LuPhoneCall size={30} />
          <h3 className="font-semibold text-lg  mt-3">24/7 SUPPORTING</h3>
          <p className="text-gray-600 mt-2">
            Shop with confidence anytime, anywhere. Our free shipping service comes with 24/7 support to ensure your packages arrive safely and on time!
          </p>
        </div>

        {/* Daily Email */}
        <div className="flex flex-col items-center text-center">
          {/* <img src="path_to_daily_email_icon.png" alt="Daily Email Icon" className="w-12 h-12 mb-4" /> */}
          <MdOutlineAttachEmail size={32}/>
          <h3 className="font-semibold text-lg  mt-3">DAILY EMAIL</h3>
          <p className="text-gray-600 mt-2">
            Stay up-to-date with your deliveries. Enjoy the convenience of daily email updates with our free shipping service, making your online shopping experience even more enjoyable!
          </p>
        </div>

        {/* Easy Payment */}
        <div className="flex flex-col items-center text-center">
          {/* <img src="path_to_easy_payment_icon.png" alt="Easy Payment Icon" className="w-12 h-12 mb-4" /> */}
          <RiSecurePaymentLine size={32}/>
          <h3 className="font-semibold text-lg  mt-3">EASY PAYMENT</h3>
          <p className="text-gray-600 mt-2">
            Shop and pay with ease. Our free shipping service not only delivers your packages for free but also offers easy payment options, making your shopping experience a breeze!
          </p>
        </div>

        {/* Monthly Voucher */}
        <div className="flex flex-col items-center text-center">
          {/* <img src="path_to_monthly_voucher_icon.png" alt="Monthly Voucher Icon" className="w-12 h-12 mb-4" /> */}
          <MdOutlineDiscount size={32}/>
          <h3 className="font-semibold text-lg  mt-3">MONTHLY VOUCHER</h3>
          <p className="text-gray-600 mt-2">
            More than just free shipping: our service rewards your loyalty with monthly vouchers, giving you more reasons to shop and save on your favorite products!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
