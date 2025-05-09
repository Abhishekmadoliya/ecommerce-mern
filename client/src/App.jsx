import React, { createContext, useContext, useState } from "react";
import Login from "./components/screens/Login";
import { Route, Routes } from "react-router-dom";
import ProductListing from "./components/screens/ProductListing";
import ProductDetails from "./components/screens/ProductDetails";

// import Todo from './Todo'
import "./index.css";
import Cart from "./components/screens/Cart";
import ContactUs from "./components/screens/ContactUs";
import Header from "./components/utility components/Header";
import Signup from "./components/screens/Signup";

export const cartContext = createContext();

const App = () => {
   const [cartDetails, setCartDetails] = useState(null);
  return (
    <>
      <cartContext.Provider value={{cartDetails,setCartDetails}} >
        <Header />

        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path='/products' element={<ProductListing/>} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>

        </cartContext.Provider>
    
    </>
    // <Todo/>
  );
};

export default App;
