import React from "react";
import { useNavigate } from "react-router-dom";

const ShopArticle = ({
  product,
  cartItems,
  addToCart,
  removeFromCart,
  selectedProductCount,
}) => {
  const isProductInCart = cartItems && cartItems.includes(product.id);

  const navigate = useNavigate();

  const handleToggleCart = () => {
    if (isProductInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product.id);
    }
  };

  const navigateToProductDetails = () => {
    navigate(`/shop/${product.id}`, { state: { product } });
  };

  const cartIcon = (
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
        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  );

  return (
    <section>
      <div>
        <article
          className="h-full transform cursor-pointer rounded-xl bg-white p-3 shadow-lg transition hover:scale-105 hover:shadow-xl"
          onClick={navigateToProductDetails}
        >
          <div className="relative flex h-40 items-end overflow-hidden rounded-xl">
            <img
              src={product.item_image}
              alt={product.item_name}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="mt-1 p-2">
            <h2 className="font-bold text-slate-900">{product.item_name}</h2>
            <p className="text-slate-700">{product.item_flavour}</p>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-lg font-bold text-black">
                ${product.item_price}
              </p>
              <div
                className={`flex h-10 items-center space-x-1.5 rounded-lg ${
                  isProductInCart
                    ? "bg-second text-white hover:bg-dark-blue"
                    : "bg-first hover:bg-yellow-400"
                } px-4 text-blue-900 duration-100`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleCart();
                }}
              >
                {cartIcon}
                <button className="text-sm md:text-xs">
                  {isProductInCart ? "Remove" : "Add to Cart"}
                </button>
                {isProductInCart && (
                  <span className="ml-2 text-sm md:text-xs">
                    {selectedProductCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ShopArticle;
