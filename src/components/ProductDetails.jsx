import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = ({ addToCart, removeFromCart, cartItems }) => {
  const location = useLocation();
  const product = location.state?.product;
  const [loading, setLoading] = useState(true);
  const isProductInCart = cartItems.includes(product?.id);

  useEffect(() => {
    if (product) {
      setLoading(false);
    }
  }, [product]);

  const handleToggleCart = () => {
    if (product) {
      if (isProductInCart) {
        removeFromCart(product.id);
      } else {
        addToCart(product.id);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-3">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="pb-4/5 relative">
                <img
                  src={product.item_image}
                  alt={product.item_name}
                  className="absolute inset-0 h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {product.item_name}
                </h2>
                <p className="text-gray-600">{product.item_flavour}</p>
                <p className="mt-2 text-gray-800">{product.item_description}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Product Details
                </h3>
              </div>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold">Size:</span>{" "}
                  {product.item_size}
                </li>
                <li>
                  <span className="font-semibold">Price:</span> $
                  {product.item_price}
                </li>
                <li>
                  <span className="font-semibold">Stock:</span> {product.stock}{" "}
                  available
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
      )}
    </div>
  );
};

export default ProductDetails;
