import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../Context/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const { id, image, category, title, price } = product;

  return (
    <div
      className="grid-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={title} />
      <ol>
      <h3>{title}</h3>
      <p>{category}</p>
      <p>${price}</p>
      </ol>
      {isHovered && (
        <div className="product-actions">
          <button onClick={handleAddToCart}>
            <BsPlus />
          </button>
          <Link to={`/product/${id}`}>
            <BsEyeFill />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Product;
