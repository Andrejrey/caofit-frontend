import React, { useState, useEffect } from "react";
import ShopArticle from "./ShopArticle";
import CartModal from "./CartModal";

const Shop = ({
  products = [],
  incrementSelectedProductCount,
  decrementSelectedProductCount,
  addToCart,
  cartItems,
  setCartItems,
  selectedProductCount,
}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  useEffect(() => {
    const storedSelectedItems = localStorage.getItem("selectedItems");
    if (storedSelectedItems) {
      setSelectedItems(JSON.parse(storedSelectedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
  }, [selectedItems]);

  const handleAddToCart = (productId) => {
    if (!selectedItems.includes(productId)) {
      setSelectedItems([...selectedItems, productId]);
      incrementSelectedProductCount();
    }
    addToCart(productId);
  };

  const handleRemoveFromCart = (productId) => {
    setSelectedItems(selectedItems.filter((id) => id !== productId));
    decrementSelectedProductCount();
    addToCart(productId);
  };

  const toggleCartModal = () => {
    setCartIsOpen(!cartIsOpen);
  };

  const closeCartModal = () => {
    setCartIsOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="px-8 py-8">
        <h1 className="text-5xl font-extrabold text-dark-blue">
          CaoFIT
          <span className="text-3xl font-bold text-dark-blue-light">Shop</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ShopArticle
            key={product.id}
            product={product}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
            cartItems={cartItems}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            selectedProductCount={selectedProductCount}
          />
        ))}
      </div>
      <CartModal
        cartItems={cartItems}
        setCartItems={setCartItems}
        isOpen={cartIsOpen}
        onClose={closeCartModal}
        selectedItems={selectedItems}
        products={products}
      />
    </div>
  );
};

export default Shop;
