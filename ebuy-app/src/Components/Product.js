import React,{useContext} from 'react';
    // import link
import {link} from 'react-router-dom';
    // import icons
import {BsPlus, BsEyeFill} from 'react-icons.bs';
    // import cart context
import {Cartcontext } from '../contexts/Cartcontext';

const product = ({ product }) => {
   const { addToCart } = useContext(CartContext);
   }
     // destructure product
    export const Product = () => {
  return (
    <div>Product</div>
  )
}
export default Product;
