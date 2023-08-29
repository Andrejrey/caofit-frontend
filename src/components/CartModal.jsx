import React, { useState, useEffect } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function CartModal({
  cartItems = [],
  isOpen,
  onClose,
  selectedItems = [],
  products = [],
  deleteProduct,
  clearCart,
  isMobile,
}) {
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const initialQuantities = {};
    let initialTotalPrice = 0;

    cartItems.forEach((itemId) => {
      const product = products.find((p) => p.id === itemId);
      if (product) {
        initialQuantities[itemId] = 1;
        initialTotalPrice += product.item_price;
      }
    });

    setQuantities(initialQuantities);
    setTotalPrice(initialTotalPrice);
  }, [cartItems, products]);

  const increaseQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1,
    }));
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + getProductPrice(productId)
    );
  };

  const decreaseQuantity = (productId) => {
    if (quantities[productId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1,
      }));
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice - getProductPrice(productId)
      );
    } else {
      deleteProduct(productId);
    }
  };

  const getProductPrice = (productId) => {
    const product = products.find((p) => p.id === productId);
    return product ? product.item_price : 0;
  };

  const totalItems = cartItems.length;
  const closeOnEmptyCart =
    totalItems === 0 || (totalItems === 1 && quantities[cartItems[0]] === 0);

  const handleCloseModal = () => {
    onClose();
  };

  const handleClearCart = () => {
    clearCart();
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto ${
        isOpen ? "visible" : "hidden"
      }`}
    >
      <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:h-screen sm:align-middle"></span>
        &#8203;
        <div
          className={`${
            isMobile ? "w-full" : "w-auto"
          } inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:max-w-lg sm:align-top`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <ul className="divide-y divide-gray-200">
                {selectedItems.map((productId) => {
                  const product = products.find((p) => p.id === productId);
                  if (!product) return null;

                  return (
                    <li key={product.id} className="flex py-4">
                      <img
                        src={product.item_image}
                        alt={product.item_name}
                        className="h-16 w-16"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          {product.item_name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          ${product.item_price}
                        </p>
                        <div className="mt-2 flex items-center justify-between space-x-2">
                          <button
                            className="rounded-lg bg-gray-100 px-2 py-1"
                            onClick={() => decreaseQuantity(product.id)}
                          >
                            <IoRemove />
                          </button>
                          <span>{quantities[product.id]}</span>
                          <button
                            className="rounded-lg bg-gray-100 px-2 py-1"
                            onClick={() => increaseQuantity(product.id)}
                          >
                            <IoAdd />
                          </button>
                          <button
                            className="h-8 w-8 text-red-500"
                            onClick={() => deleteProduct(product.id)}
                          >
                            <FaTrash className="h-5 w-5 hover:text-red-600" />
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              className={`inline-flex w-full justify-center rounded-md border border-transparent ${
                isMobile ? "bg-red-500" : "bg-first"
              } px-4 py-2 text-base font-medium text-dark-blue shadow-sm hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm`}
              onClick={handleCloseModal}
            >
              {isMobile ? "Close" : "Continue Shopping"}
            </button>
            <div className="mt-2 flex items-center justify-center space-x-2">
              <div className="flex items-center space-x-2">
                <div className="text-lg font-semibold text-gray-700">
                  Total:
                </div>
                <div className="text-lg font-semibold text-gray-700">
                  ${totalPrice.toFixed(2)}
                </div>
              </div>
              <button
                onClick={handleClearCart}
                className="flex items-center rounded-md bg-red-500 px-3 py-1 text-white hover:bg-red-600"
              >
                Clear
              </button>
              <Link
                to="/checkout"
                className={`${
                  closeOnEmptyCart ? "bg-red-500" : "bg-dark-blue"
                } rounded-md px-3 py-1 text-white hover:bg-second`}
                onClick={
                  closeOnEmptyCart ? (e) => e.preventDefault() : undefined
                }
              >
                {closeOnEmptyCart ? "Cart Empty" : "Checkout"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
