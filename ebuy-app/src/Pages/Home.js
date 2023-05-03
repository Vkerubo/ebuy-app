import React, { useContext } from 'react';
//import product context

import { ProductContext } from '../contexts/ProductContext';

//import components
import Product from '../components/Product';
import Hero from '../components/Hero';

//new component
const Home = () => {
    // access the products getting them from product context
    const {products } =useContext(ProductContext)
    //get only men's and womens clothing category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

 

export default Home;
