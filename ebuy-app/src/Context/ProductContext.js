import React ,{createContext, useState, useEffect}from 'react'
// create context

export const ProductContext = createContext();
 
const productprovider = ({ children }) => {
    // products state
    const [products, setProducts] = useState([]);
    // fetch products
    useEffect(() => {
        const fetchProducts = async () =>{
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    },[]);
    }

}
     


export default productprovider;
