import React from "react";
import ShopArticle from "./ShopArticle";

const Shop = ({
  products = [],
  incrementSelectedProductCount,
  decrementSelectedProductCount,
  addToCart,
  cartItems,
}) => {
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
            addToCart={addToCart}
            cartItems={cartItems}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
