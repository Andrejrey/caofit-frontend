import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { parse } from "postgres-array";

const ProductDetails = ({ addToCart, removeFromCart, cartItems }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [shopItem, setShopItem] = useState({});
  const [itemDescription, setItemDescription] = useState([]);
  const isProductInCart = cartItems.includes(shopItem[0]?.id);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_APP_CAOFIT_API}/shop_items/${id}`)
      .then((response) => {
        setShopItem(response.data);
        setItemDescription(response.data[0].item_description);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  const formatDescription = (object) => {
    const cleanedString = object.slice(1, -1);
    const newArray = cleanedString.split('","');
    console.log(newArray);
    return newArray.map((item) => (
      <li className="list-disc">{item.replace(/"/g, "")}</li>
    ));
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

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <div>Loading...</div>
      ) : shopItem ? (
        <div className="lg:flex lg:items-center lg:justify-center lg:space-x-4">
          <div className="lg:w-1/3">
            <img
              src={shopItem[0].item_image}
              alt={shopItem[0].item_name}
              className="h-auto w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h1 className="mb-2 text-4xl font-semibold text-gray-900">
                {shopItem[0].item_name}
              </h1>
              <p className="mb-4 text-xl text-gray-600">
                {shopItem[0].item_flavour}
              </p>
              <div className="text-gray-800">
                <ul className="ml-5">{formatDescription(itemDescription)}</ul>
              </div>
              <ul className="mt-6 space-y-2">
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
                className={`mt-8 w-full rounded-lg ${
                  isProductInCart
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-second hover:bg-dark-blue-light"
                } py-3 text-lg font-semibold text-white`}
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
