import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Calculator from "./components/Calculator";
import Diary from "./components/Diary";
import Contact from "./components/Contact";
import ShopArticle from "./components/ShopArticle";
import CartModal from "./components/CartModal";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  const [selectedProductCount, setSelectedProductCount] = useState(0);
  const [shopItems, setShopItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [food, setFood] = useState([]);
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/foodlist").then((response) => {
      setFood(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/shop_items").then((response) => {
      setShopItems(response.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem(
      "selectedProductCount",
      selectedProductCount.toString()
    );
  }, [cartItems, selectedProductCount]);

  const addToCart = (productId) => {
    if (cartItems.includes(productId)) {
      setCartItems(cartItems.filter((id) => id !== productId));
    } else {
      setCartItems([...cartItems, productId]);
    }
  };

  const deleteProduct = (productId) => {
    setCartItems(cartItems.filter((id) => id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const incrementSelectedProductCount = () => {
    setSelectedProductCount((prevCount) => prevCount + 1);
  };

  const decrementSelectedProductCount = () => {
    setSelectedProductCount((prevCount) => prevCount - 1);
  };

  const toggleCartModal = () => {
    setCartModalOpen((prevModalOpen) => !prevModalOpen);
  };

  const closeCartModal = () => {
    setCartModalOpen(false);
  };

  const name = "Andrej";

  return (
    <>
      <Header
        selectedProductCount={selectedProductCount}
        incrementSelectedProductCount={incrementSelectedProductCount}
        toggleCartModal={toggleCartModal}
        cartItems={cartItems}
        clearCart={clearCart}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/shop"
          element={
            <Shop
              products={shopItems}
              incrementSelectedProductCount={incrementSelectedProductCount}
              decrementSelectedProductCount={decrementSelectedProductCount}
              addToCart={addToCart}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route
          path="/shop/:id"
          element={
            <ShopArticle
              incrementSelectedProductCount={incrementSelectedProductCount}
              decrementSelectedProductCount={decrementSelectedProductCount}
              cartItems={cartItems}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/calculator"
          element={<Calculator food={food} name={name} />}
        />
        <Route path="/diary" element={<Diary />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <CartModal
        cartItems={cartItems}
        isOpen={isCartModalOpen}
        onClose={closeCartModal}
        products={shopItems}
        selectedItems={cartItems}
        deleteProduct={deleteProduct}
        clearCart={clearCart}
        selectedProductCount={selectedProductCount}
      />
      <Footer />
    </>
  );
}

export default App;
