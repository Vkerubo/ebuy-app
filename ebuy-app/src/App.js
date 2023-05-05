import React from "react";
// import react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
// import components
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
      <div className="header-container">
        <Header />
       </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
