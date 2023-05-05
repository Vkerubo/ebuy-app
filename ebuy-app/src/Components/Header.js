import React, { useContext, useEffect, useState } from "react";
// sidebar context
import { SidebarContext } from "../Context/SidebarContext";
// cart context
import { CartContext } from "../Context/CartContext";
// import icons
import { BsBag } from "react-icons/bs";
// import link
import { Link } from "react-router-dom";
// import logo
import Logo from "../img/logo.svg";
import "./Header.css"

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-2 shadow-md" : "bg-none py-4"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* cart icon */}
        <div className="cart-icon-container">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex items-center mr-4"
          >
            <BsBag className="text-2xl" />
            <div className="cart-item">{itemAmount}</div>
          </div>
        </div>

        {/* logo */}
        <div className="flex items-center justify-center">
          <Link to={"/"}>
            <div>
              <img className="logo-image" src={Logo} alt="" />
            </div>
          </Link>
        </div>

        {/* placeholder for center space */}
        <div className="w-8"></div>
      </div>
    </header>
  );
};


export default Header;
