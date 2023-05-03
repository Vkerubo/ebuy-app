import React, { useContext } from 'react';
// import useParams
import { useParams } from 'react-router-dom';
// import cart context
import { CartContext } from '../contexts/CartContext';
// import product context
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
    // get the product id from url
    const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
     // get the single product based on the id
     const product = products.find((item) => {
        return item.id === parseInt(id);
      });























};
export default ProductDetails;