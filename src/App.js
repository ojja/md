import React, { Fragment, useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home.js";
import CategoryPage from "./pages/category/CategoryPage.js";
import { NavBar } from "./layouts";
import Footer from "./layouts/Footer/Footer.js";
import Product from "./pages/product/Product.js";
import Cart from "./pages/Cart.js";
import ShoppingCartProvider from "./context/cartContext.js";
import Checkout from "./pages/Checkout.js";
import Thanks from "./pages/Thanks.js";
import About from "./pages/About.js";

function App() {
  const [heightHeader, setHeaderHeight] = useState(0)
  const [heightFooter, setFooterHeight] = useState(0)
  const ref = useRef(null)
  const refFooter = useRef(null)
  const location = useLocation();
  useEffect(() => {
    // console.log(location);
    setHeaderHeight(ref.current.clientHeight);
    setFooterHeight(refFooter.current.clientHeight);
  },[location]);
  // location = location.replace("/","");
  return (
    <ShoppingCartProvider>
      <div ref={ref}>
        <NavBar location={location.pathname.split('/').pop()}/>
      </div>
      <div style={{minHeight: `calc(100vh - ${heightHeader+heightFooter}px)`}}>
        <Routes>
          <Route path="/cat/:cat" element={<CategoryPage />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thanks" element={<Thanks />} />
          {/* Cor */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/:{cat}" element={} /> */}
        </Routes>
      </div>
      <div ref={refFooter}>
        <Footer />
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
