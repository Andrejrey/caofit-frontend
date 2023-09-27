import { useState, useEffect } from "react";
import ShopArticle from "./ShopArticle";
import Loading from "./Loading";

const Shop = ({
  products = [],
  incrementSelectedProductCount,
  decrementSelectedProductCount,
  addToCart,
  cartItems,
  setCartItems,
}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [sortOption, setSortOption] = useState("popular");

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
    setCartItems(selectedItems);
  }, [selectedItems, setCartItems]);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "popular") {
      return b.popularity - a.popularity;
    } else if (sortOption === "recents") {
      return new Date(b.date_added) - new Date(a.date_added);
    } else if (sortOption === "itemType") {
      if (a.item_type && b.item_type) {
        return a.item_type.localeCompare(b.item_type);
      }
    }
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="px-8 py-8">
        <h1 className="text-5xl font-extrabold text-dark-blue">
          CaoFIT
          <span className="text-3xl font-bold text-dark-blue-light">Shop</span>
        </h1>
        <div className="mt-4 flex">
          <p className="mr-4 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </p>
          <select
            className="rounded-lg border-second px-2 py-1"
            onChange={(e) => setSortOption(e.target.value)}
            value={sortOption}
          >
            <option value="popular">Popular</option>
            <option value="recents">Recents</option>
            <option value="itemType">Item Type</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {sortedProducts.map((product) => (
          <ShopArticle
            key={product.id}
            product={product}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
            cartItems={cartItems}
          />
        ))}
      </div>
      {!products && <Loading />}
    </div>
  );
};

export default Shop;
