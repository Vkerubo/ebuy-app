import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
// import cart context
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
    const { removeFromCart, increaseAmount, decreaseAmount } =
      useContext(CartContext);
    // destructure item
    const { id, title, image, price, amount } = item;



