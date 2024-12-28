import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Product } from "./pages/Product";
import { ProductDetails } from "./pages/ProductDetails";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

export const MyContext = createContext();

function App() {
  const [isHeaderFooterVisible, setIsHeaderFooterVisible] = useState(true);

  const values = {
    isHeaderFooterVisible,
    setIsHeaderFooterVisible,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {isHeaderFooterVisible === true && <Header />}
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* 
        <Route path="/my-listing" element={<MyListing />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/search" element={<Search />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} /> */}
        </Routes>
        {isHeaderFooterVisible === true && <Footer />}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
