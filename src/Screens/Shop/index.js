import React from 'react'
import Hero from './Hero'
import ProductSection from '../../Components/ProductSection'
import syltherine from '../../Assets/Images/productsection/syltherine.png'
import lolito from '../../Assets/Images/productsection/lolito.png'
import respira from '../../Assets/Images/productsection/respira.png'
import grifo from '../../Assets/Images/productsection/grifo.png'
import muggo from '../../Assets/Images/productsection/muggo.png'
import pingky from '../../Assets/Images/productsection/pingky.png'
import potty from '../../Assets/Images/productsection/potty.png'

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

const Shop = () => {
  return (
    <>
    <Hero/>
    <ProductSection products={products}/>
    </>
  )
}

export default Shop