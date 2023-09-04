import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = ({ addToCart, removeFromCart, cartItems }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [shopItem, setShopItem] = useState([]);
  const isProductInCart = cartItems.includes(shopItem[0]?.id);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_APP_CAOFIT_API}/shop_items/${id}`)
      .then((response) => {
        setShopItem(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  const formatDescription = (description) => {
    if (!description) return "";
    return description.replace(/\{|\}|"|,/g, "").replace(/\./g, ". ");
  };

  const handleToggleCart = () => {
    if (shopItem[0]) {
      if (isProductInCart) {
        removeFromCart(shopItem[0].id);
      } else {
        addToCart(shopItem[0].id);
      }
    }
  };
  console.log("shopItem:", shopItem);

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <div>Loading...</div>
      ) : shopItem ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-3">
            <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg md:flex-row">
              <div className="w-full md:w-1/2">
                <img
                  src={shopItem[0].item_image}
                  alt={shopItem[0].item_name}
                  className="h-auto w-full rounded-lg"
                />
              </div>
              <div className="ml-0 mt-4 w-full md:ml-4 md:mt-0 md:w-1/2">
                <h1 className="text-2xl font-semibold text-gray-900">
                  {shopItem[0].item_name}
                </h1>
                <p className="mb-5 text-gray-600">{shopItem[0].item_flavour}</p>
                <p className="text-gray-800">
                  {formatDescription(shopItem[0].item_description)}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Product Details
              </h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold">Size:</span>{" "}
                  {shopItem[0].item_size}
                </li>
                <li>
                  <span className="font-semibold">Price:</span> $
                  {shopItem[0].item_price}
                </li>
                <li>
                  <span className="font-semibold">Stock:</span>{" "}
                  {shopItem[0].stock} available
                </li>
              </ul>
              <button
                className={`mt-4 w-full rounded-lg ${
                  isProductInCart
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-second hover:bg-dark-blue-light"
                } py-2 text-white`}
                onClick={handleToggleCart}
              >
                {isProductInCart ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Error loading data</div>
      )}
    </div>
  );
};

export default ProductDetails;
