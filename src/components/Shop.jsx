import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Make sure to install axios

function Shop({
  incrementSelectedProductCount,
  decrementSelectedProductCount,
  addToCart,
  cartItems,
}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend when the component mounts
    axios
      .get("YOUR_BACKEND_API_ENDPOINT")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <section className="bg-gray-100 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <article
            key={index}
            className="rounded-xl bg-white p-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl"
          >
            <Link to={`/shop/${product.id}`}>
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <img src={product.item_image} alt={product.item_name} />
              </div>
              <div className="mt-1 p-2">
                <h2 className="text-slate-900">{product.item_name}</h2>
                <div className="mt-3 flex items-end justify-between">
                  <p className="text-lg font-bold text-black">
                    ${product.item_price}
                  </p>
                  <div
                    className={`flex items-center space-x-1.5 rounded-lg  ${
                      cartItems.includes(product.id)
                        ? "bg-second text-white hover:bg-dark-blue"
                        : "bg-first "
                    } px-4 py-1.5 text-blue-900 duration-100 hover:bg-yellow-400`}
                    onClick={() => addToCart(product.id)}
                  >
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
                    <button className="text-sm">
                      {cartItems.includes(product.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Shop;
