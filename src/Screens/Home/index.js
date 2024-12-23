import React from "react";
import Navbar from "../../Components/Navbar";
import HeroSection from "../../Components/HeroSection";
import CategorySection from "../../Components/CategorySection";
import ProductSection from "../../Components/ProductSection";
import GallerySection from "../../Components/GallerySection";
import Footer from "../../Components/Footer";
import RoomInspirationSection from "../../Components/RoomSection";

import syltherine from '../../Assets/Images/productsection/syltherine.png'
import lolito from '../../Assets/Images/productsection/lolito.png'
import respira from '../../Assets/Images/productsection/respira.png'
import grifo from '../../Assets/Images/productsection/grifo.png'
import muggo from '../../Assets/Images/productsection/muggo.png'
import pingky from '../../Assets/Images/productsection/pingky.png'
import potty from '../../Assets/Images/productsection/potty.png'
import WhyChooseUs from "../../Components/WhyChooseUs";
import FurnitureGallery from "../../Components/FurnitureGallery";
import SignatureCollection from "../../Components/SignatureCollection";
import Review from "../../Components/Reviews";


const products = [
    {
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      originalPrice: 'Rp 3.500.000',
      image: syltherine,
      discount: 30,
    },
    {
      name: 'Leviosa',
      description: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      image: respira,
    },
    {
      name: 'Lolito',
      description: 'Luxury big sofa',
      price: 'Rp 7.000.000',
      originalPrice: 'Rp 14.000.000',
      image: lolito,
      discount: 50,
    },
    {
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      price: 'Rp 500.000',
      image: respira,
      isNew: true,
    },
    {
      name: 'Grifo',
      description: 'Night lamp',
      price: 'Rp 1.500.000',
      image: grifo,
    },
    {
      name: 'Muggo',
      description: 'Small mug',
      price: 'Rp 150.000',
      image: muggo,
      isNew: true,
    },
    {
      name: 'Pingky',
      description: 'Cute bed set',
      price: 'Rp 7.000.000',
      originalPrice: 'Rp 14.000.000',
      image: pingky,
      discount: 50,
    },
    {
      name: 'Potty',
      description: 'Minimalist flower pot',
      price: 'Rp 500.000',
      image: potty ,
      isNew: true,
    },
  ];

const Homepage = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <WhyChooseUs/>
      {/* <FurnitureGallery/> */}
      
      <ProductSection products={products}/>
      <SignatureCollection/>
      <RoomInspirationSection />
      <Review/>
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Homepage;
