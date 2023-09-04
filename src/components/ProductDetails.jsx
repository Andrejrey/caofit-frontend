import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = ({ addToCart, removeFromCart, cartItems }) => {
  const location = useLocation();
  const product = location.state?.product;
  const [loading, setLoading] = useState(true);
  const [shopItem, setShopItem] = useState({});
  const isProductInCart = cartItems.includes(product?.id);
  const { id } = useParams();

  // console.log(shopItem && shopItem[0].item_image);

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

  const handleToggleCart = () => {
    if (shopItem) {
      if (isProductInCart) {
        removeFromCart(shopItem.id);
      } else {
        addToCart(shopItem.id);
      }
    }
  };

  // const descritpion = shopItem && shopItem[0].item_description;
  // console.log(shopItem && shopItem[0].item_description.slice(1, -1));

  // const clearedDescription =
  //   shopItem && shopItem[0].item_description.slice(1, -1);

  // const finalDescription = clearedDescription.split('","');

  // console.log(finalDescription && finalDescription);

  return (
    <div className="container h-screen mx-auto px-4 py-8">
      {loading ? (
        <div>Loading...</div>
      ) : shopItem ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-3">
            <div className="flex items-center rounded-lg bg-white h-fit p-6 shadow-lg">
              <div>
                <div className="mt-4">
                  <h1 className="text-2xl font-semibold text-gray-900">
                    {shopItem[0].item_name}
                  </h1>
                  <p className="text-gray-600 mb-5">
                    {shopItem[0].item_flavour}
                  </p>
                </div>
                <div>
                  <img
                    src={shopItem[0].item_image}
                    alt={shopItem[0].item_name}
                    className="inset-0 h-96 w-auto rounded-lg"
                  />
                </div>
              </div>
              <div className="m-5">
                {" "}
                <p className="mt-2 w-96 text-gray-800">
                  {shopItem[0].item_description.split("")}
                </p>
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
