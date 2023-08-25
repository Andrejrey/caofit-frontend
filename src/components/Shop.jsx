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
}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const handleAddToCart = (productId) => {
    addToCart(productId);
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, productId]);
  };

  const toggleCartModal = () => {
    setCartIsOpen(!cartIsOpen);
  };

  const closeCartModal = () => {
    setCartIsOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 mt-8 text-center text-5xl font-bold">Shop</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ShopArticle
            key={product.id}
            product={product}
            incrementSelectedProductCount={incrementSelectedProductCount}
            decrementSelectedProductCount={decrementSelectedProductCount}
            addToCart={handleAddToCart}
            cartItems={cartItems}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
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
