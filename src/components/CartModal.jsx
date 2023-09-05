import { useState, useEffect } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function CartModal({
  cartItems = [],
  isOpen,
  onClose,
  products = [],
  deleteProduct,
  clearCart,
  isMobile,
  updateSelectedProductCount,
}) {
  const [quantities, setQuantities] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || {}
  );
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(quantities));
  }, [quantities]);

  useEffect(() => {
    let initialQuantities = { ...quantities };
    let initialTotalPrice = 0;

    cartItems.forEach((itemId) => {
      const product = products.find((p) => p.id === itemId);
      if (product) {
        if (!initialQuantities[itemId]) {
          initialQuantities[itemId] = 1;
        }
        initialTotalPrice +=
          getProductPrice(itemId) * initialQuantities[itemId];
      }
    });

    setQuantities(initialQuantities);
    setTotalPrice(initialTotalPrice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems, products]);

  const increaseQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + getProductPrice(productId)
    );
    updateSelectedProductCount((prevCount) => prevCount + 1);
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
      updateSelectedProductCount((prevCount) => prevCount - 1);
    } else {
      handleRemoveFromCart(productId);
    }
  };

  const handleRemoveFromCart = (productId) => {
    const productQuantity = quantities[productId] || 0;

    if (productQuantity > 0) {
      const updatedQuantities = { ...quantities };
      const removedProduct = products.find((p) => p.id === productId);

      if (removedProduct) {
        const removedQuantity = productQuantity;
        setTotalPrice(
          (prevTotalPrice) =>
            prevTotalPrice - removedProduct.item_price * removedQuantity
        );
        updatedQuantities[productId] -= removedQuantity;
        if (updatedQuantities[productId] <= 0) {
          delete updatedQuantities[productId];
        }
        setQuantities(updatedQuantities);
      }

      updateSelectedProductCount((prevCount) => prevCount - productQuantity);
      if (Object.keys(updatedQuantities).length === 0) {
        handleCloseModal();
      }
      deleteProduct(productId);
    }
  };

  const handleClearCart = () => {
    setQuantities({});
    clearCart();
    updateSelectedProductCount(0);
    handleCloseModal();
  };

  const getProductPrice = (productId) => {
    const product = products.find((p) => p.id === productId);
    return product ? product.item_price : 0;
  };

  const handleCloseModal = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto ${
        isOpen ? "visible" : "hidden"
      }`}
    >
      <div className="flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={handleCloseModal}
          ></div>
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
                {cartItems.map((productId) => {
                  const product = products.find((p) => p.id === productId);
                  if (!product) return null;

                  return (
                    <li
                      key={product.id}
                      className="flex items-center justify-center py-4"
                    >
                      <img
                        src={product.item_image}
                        alt={product.item_name}
                        className="h-28 w-28 object-contain"
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
                          <span>{quantities[product.id] || 0}</span>
                          <button
                            className="rounded-lg bg-gray-100 px-2 py-1"
                            onClick={() => increaseQuantity(product.id)}
                          >
                            <IoAdd />
                          </button>
                          <button
                            className="h-8 w-8 text-red-500"
                            onClick={() => handleRemoveFromCart(product.id)}
                          >
                            <FaTrash className="h-5 w-5 transform hover:text-red-600" />
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 md:flex md:flex-col">
            <button
              type="button"
              className={`inline-flex w-full items-center justify-center rounded-md border border-transparent ${
                isMobile ? "bg-red-500" : "bg-first"
              } flex items-center justify-center px-4 py-2 text-base font-medium text-dark-blue shadow-sm hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm md:text-xl`}
              onClick={() => {
                handleCloseModal();
              }}
            >
              {isMobile ? "Close" : "Continue Shopping"}
            </button>
            <div className="mt-2 flex items-center justify-center space-x-2">
              <div className="flex items-center space-x-2">
                <div className="text-lg font-semibold text-gray-700 md:text-xl">
                  Total:
                </div>
                <div className=" text-lg font-normal text-gray-700 md:text-xl">
                  ${totalPrice.toFixed(2)}
                </div>
              </div>
              <button
                onClick={handleClearCart}
                className="flex w-full items-center justify-center rounded-md bg-red-500 px-3 py-1 text-gray-100 hover:bg-red-600 md:text-xl"
              >
                Clear
              </button>
              <Link
                to="/checkout"
                className="flex w-full items-center justify-center rounded-md bg-second px-3 py-1 text-gray-100 hover:bg-dark-blue-light md:text-xl"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
