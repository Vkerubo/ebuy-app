import React, { useContext } from "react";
//import product context

import { ProductContext } from "../Context/ProductContext";

//import components
import Product from "../Components/Product";
import Hero from "../Components/Hero";

import './Home.css';

//new component
const Home = () => {
  // access the products getting them from product context
  const { products } = useContext(ProductContext);
  //get only men's and womens clothing categories
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container">
          {filteredProducts.map((product) => {
            return <Product product={product} key={product.id} className="product" />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
