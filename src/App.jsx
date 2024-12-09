import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Product } from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/product" element={<Product />} />
        {/* 
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/my-listing" element={<MyListing />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/search" element={<Search />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
