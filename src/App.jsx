import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Shop from "./components/Shop"; // Updated import
import Calculator from "./components/Calculator";
import Diary from "./components/Diary";
import Contact from "./components/Contact";
import ShopArticle from "./components/ShopArticle";
import CartModal from "./components/CartModal";
import Footer from "./components/Footer";
import image1 from "../src/assets/ESN.jpg";

function App() {
  const [selectedProductCount, setSelectedProductCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const incrementSelectedProductCount = () => {
    setSelectedProductCount((prevCount) => prevCount + 1);
  };

  const decrementSelectedProductCount = () => {
    setSelectedProductCount((prevCount) => prevCount - 1);
  };

  const addToCart = (productId) => {
    if (cartItems.includes(productId)) {
      setCartItems(cartItems.filter((id) => id !== productId));
    } else {
      setCartItems([...cartItems, productId]);
    }
  };

  const toggleCartModal = () => {
    setCartModalOpen((prevModalOpen) => !prevModalOpen);
  };

  return (
    <>
      <Header
        selectedProductCount={selectedProductCount}
        incrementSelectedProductCount={incrementSelectedProductCount}
        toggleCartModal={toggleCartModal}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/shop"
          element={
            <Shop
              incrementSelectedProductCount={incrementSelectedProductCount}
              decrementSelectedProductCount={decrementSelectedProductCount}
              addToCart={addToCart}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path="/shop/:id"
          element={
            <ShopArticle
              incrementSelectedProductCount={incrementSelectedProductCount}
              decrementSelectedProductCount={decrementSelectedProductCount}
            />
          }
        />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <CartModal
        cartItems={cartItems}
        isOpen={cartModalOpen}
        onClose={() => setCartModalOpen(false)}
      />

      <Footer />
    </>
  );
}

export default App;
