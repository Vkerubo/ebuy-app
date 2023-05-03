import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// product provider
import ProductProvider from './contexts/ProductContext';
// sidebar provider
import SidebarProvider from './contexts/SidebarContext';
// cart provider
import CartProvider from './contexts/CartContext';

//new root
const root = ReactDOM.createRoot(document.getElementById('root'));

