import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utils/authUtils";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Calculator from "./components/Calculator";
import Diary from "./components/Diary";
import CartModal from "./components/CartModal";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import UserProfile from "./components/UserProfile";
import ProtectedLayout from "./components/ProtectedLayout";
import ProductDetails from "./components/ProductDetails";
import { toast } from "react-toastify";
import axios from "axios";
import LegalNotice from "./components/LegalNotice";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loadingAuthRequest, setLoadingAuthRequest] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProductCount, setSelectedProductCount] = useState(0);
  const [shopItems, setShopItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [food, setFood] = useState([]);
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  useEffect(() => {
    const validateToken = async () => {
      try {
        setLoadingAuthRequest(true);
        const { data, error } = await getUser(token);
        if (error) throw error;
        setUser(data);
        setIsAuthenticated(true);
        setLoadingAuthRequest(false);
      } catch (error) {
        localStorage.removeItem("token");
        setToken(null);
        setLoadingAuthRequest(false);
        toast.error(error.message);
      }
    };
    token && validateToken();
  }, [token]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_CAOFIT_API}/food_list`)
      .then((response) => {
        setFood(response.data);
      });
    axios
      .get(`${import.meta.env.VITE_APP_CAOFIT_API}/shop_items`)
      .then((response) => {
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
      updateSelectedProductCount(selectedProductCount - 1);
    } else {
      setCartItems([...cartItems, productId]);
      updateSelectedProductCount(selectedProductCount + 1);
    }
  };

  const deleteProduct = (productId) => {
    setCartItems(cartItems.filter((id) => id !== productId));
    updateSelectedProductCount(selectedProductCount - 1);
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

  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    setIsOpen(false);
  };

  const updateSelectedProductCount = (count) => {
    setSelectedProductCount(count);
  };
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((id) => id !== productId));
    updateSelectedProductCount(selectedProductCount - 1);
  };

  return (
    <>
      <Header
        selectedProductCount={selectedProductCount}
        incrementSelectedProductCount={incrementSelectedProductCount}
        toggleCartModal={toggleCartModal}
        cartItems={cartItems}
        clearCart={clearCart}
        isAuthenticated={isAuthenticated}
        user={user}
        logOut={logOut}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login/"
          element={
            <LoginForm
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              setToken={setToken}
              loadingAuthRequest={loadingAuthRequest}
              setLoadingAuthRequest={setLoadingAuthRequest}
              user={user}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/register/"
          element={
            <RegisterForm
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              setToken={setToken}
              loadingAuthRequest={loadingAuthRequest}
              setLoadingAuthRequest={setLoadingAuthRequest}
            />
          }
        />
        <Route
          path="/shop/"
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
          path="/shop/:id/"
          element={
            <ProductDetails
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path="/calculator/"
          element={
            <Calculator
              food={food}
              token={token}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route path="/diary/" element={<Diary user={user} token={token} />} />
        <Route
          path="auth"
          element={<ProtectedLayout isAuthenticated={isAuthenticated} />}
        >
          <Route path="profile/" element={<UserProfile user={user} />} />
        </Route>
        <Route path="/legal-notice/" element={<LegalNotice />} />
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
        updateSelectedProductCount={updateSelectedProductCount}
      />
      <Footer />
    </>
  );
}

export default App;
