import React, { useContext, useEffect, useState } from 'react';
// sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
// cart context
import { CartContext } from '../contexts/CartContext';
// import icons
import { BsBag } from 'react-icons/bs';
// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../img/logo.svg';

const Header = () => {
// header state
const [isActive, setIsActive] = useState(false);
const { isOpen, setIsOpen } = useContext(SidebarContext);
const { itemAmount } = useContext(CartContext);
// event listener
useEffect(() => {
  window.addEventListener('scroll', () => {
    window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
  });
});
return (
    
)
    

























