import React, { useState } from "react";
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

  const handleAddToCart = (productId) => {
    addToCart(productId);
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, productId]);
    incrementSelectedProductCount();
  };

  const handleRemoveFromCart = (productId) => {
    addToCart(productId);
    setSelectedItems(selectedItems.filter((id) => id !== productId));
    decrementSelectedProductCount();
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
