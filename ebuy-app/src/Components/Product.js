import React,{useContext} from 'react';
    // import link
import {link} from 'react-router-dom';
    // import icons
import {BsPlus, BsEyeFill} from 'react-icons.bs';
    // import cart context
import {Cartcontext } from '../contexts/Cartcontext';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    // destructure product
    const { id, image, category, title, price } = product;
    return (
      <div>
        <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
          <div className='w-full h-full flex justify-center items-center'>
            {/* image */}
            <div className='w-[200px] mx-auto flex justify-center items-center'>
              <img
                className='max-h-[160px] group-hover:scale-110 transition duration-300'
                src={image}
                alt=''
              />
            </div>
          </div>
          {/* buttons */}
          