import React ,{createContext, useState, useEffect}from 'react'
// create context

export const ProductContext = createContext();
 
const productprovider = ({ children }) => {
    // products state
    const [products, setProducts] = useState([]);
    
}
     


export default productprovider;
