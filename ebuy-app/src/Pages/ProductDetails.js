import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { ProductContext } from "../Context/ProductContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product;
  return (
    <section className="product-details-container">
      <div className="product-details-wrapper">
        <div className="product-image">
          <img src={image} alt="" />
        </div>
        <div className="product-text">
          <h1 className="product-title">{title}</h1>
          <div className="product-price">${price}</div>
          <p className="product-description">{description}</p>
          <button
            onClick={() => addToCart(product, product.id)}
            className="add-to-cart-button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
