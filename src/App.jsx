import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Calculator from "./components/Calculator";
import Diary from "./components/Diary";
import Contact from "./components/Contact";
import ShopArticle from "./components/ShopArticle";
import CartModal from "./components/CartModal";
import Footer from "./components/Footer";
import image1 from "../src/assets/ESN.jpg";
import axios from "axios";

function App() {
  const [selectedProductCount, setSelectedProductCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [food, setFood] = useState();

  useEffect(() => {
    axios.get("http://localhost:8080/foodlist").then((response) => {
      setFood(response.data);
    });
  }, []);

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

  const testProducts = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      image: image1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      image: image1,
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
      image: image1,
    },
  ];

  const filteredCartItems = testProducts.filter((product) =>
    cartItems ? cartItems.includes(product.id) : false
  );

  const name = "Andrej";
  const ExampleShop = [{}];

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
              products={testProducts}
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
              products={testProducts}
              incrementSelectedProductCount={incrementSelectedProductCount}
              decrementSelectedProductCount={decrementSelectedProductCount}
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
        cartItems={filteredCartItems}
        isOpen={cartModalOpen}
        onClose={() => setCartModalOpen(false)}
      />
      <Footer />
    </>
  );
}
export default App;
