import React from 'react';
// import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
// import components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
       <Header />
       <Sidebar />
       <Footer />
    </div>
  )
}

export default App;
