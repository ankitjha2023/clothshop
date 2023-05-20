import React from "react";

import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./App.css"
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import Bag from "./pages/Bag";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

const App = () => (

   
    <BrowserRouter>
    <Navbar/>
    
      <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/profile" element={<Profile/>} />
      <Route  path="/wishlist" element={<Wishlist/>} />
      <Route  path="/bag" element={<Bag/>} />
      <Route  path="/about" element={<About/>} />
      <Route  path="/contact" element={<Contact/>} />
      <Route  path="/product" element={<Product/>} />
       
     
      </Routes>
     <Footer/>
    </BrowserRouter>
 
);

export default App;
