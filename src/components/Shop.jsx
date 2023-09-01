import React, { useState, useEffect } from "react";
import ShopArticle from "./ShopArticle";

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

  useEffect(() => {
    const storedSelectedItems = localStorage.getItem("selectedItems");
    if (storedSelectedItems) {
      setSelectedItems(JSON.parse(storedSelectedItems));
    }
  }, []);

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

  useEffect(() => {
    // Update the cart items with the selected items
    setCartItems(selectedItems);
  }, [selectedItems, setCartItems]);

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
            selectedProductCount={selectedProductCount}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
