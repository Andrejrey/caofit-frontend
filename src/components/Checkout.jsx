import { useState } from "react";

function Checkout({ cartItems }) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");

  const renderCartItems = () => {
    return cartItems.map((item, index) => (
      <div key={index} className="mb-6 border-b border-gray-200 pb-6">
        <div className="-mx-3 flex items-center">
          <div className="px-3">
            <img
              src={item.image}
              alt={item.name}
              className="h-24 w-24 rounded-lg object-cover"
            />
          </div>
          <div className="flex-grow px-3">
            <h6 className="font-semibold text-gray-600">{item.name}</h6>
            <p className="text-gray-400">Quantity: {item.quantity}</p>
          </div>
          <div className="px-3">
            <span className="text-xl font-semibold text-gray-600">
              ${item.price}
            </span>
            <span className="text-sm font-semibold text-gray-600">.00</span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="min-w-screen min-h-screen bg-gray-50 py-5">
      <div className="w-full border-b border-t border-gray-200 bg-white px-5 py-10 text-gray-800">
        <div className="w-full">
          <div className="-mx-3 items-start md:flex">
            <div className="px-3 md:w-7/12 lg:pr-10">
              <div className="mx-auto mb-6 w-full border-b border-gray-200 pb-6 font-light text-gray-800">
                {renderCartItems()}
              </div>
              <div className="mb-6 border-b border-gray-200 pb-6">
                <div className="-mx-2 flex items-end justify-end">
                  <div className="flex-grow px-2 lg:max-w-xs">
                    <label className="mb-2 ml-1 text-sm font-semibold text-gray-600">
                      Discount code
                    </label>
                    <div>
                      <input
                        className="w-full rounded-md border border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                        placeholder="XXXXXX"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <button className="mx-auto block w-full max-w-xs rounded-md border border-transparent bg-gray-400 px-5 py-2 font-semibold text-white hover:bg-gray-500 focus:bg-gray-500">
                      APPLY
                    </button>
                  </div>
                </div>
              </div>
              <div className="mb-6 border-b border-gray-200 pb-6 text-gray-800">
                <div className="mb-3 flex w-full items-center">
                  <div className="flex-grow">
                    <span className="text-gray-600">Subtotal</span>
                  </div>
                  <div className="pl-3">
                    <span className="font-semibold">$190.91</span>
                  </div>
                </div>
                <div className="flex w-full items-center">
                  <div className="flex-grow">
                    <span className="text-gray-600">Taxes</span>
                  </div>
                  <div className="pl-3">
                    <span className="font-semibold">$19.09</span>
                  </div>
                </div>
              </div>
              <div className="mb-6 border-b border-gray-200 pb-6 text-xl text-gray-800 md:border-none">
                <div className="flex w-full items-center">
                  <div className="flex-grow">
                    <span className="text-gray-600">Total</span>
                  </div>
                  <div className="pl-3">
                    <span className="text-sm font-semibold text-gray-400">
                      AUD
                    </span>{" "}
                    <span className="font-semibold">$210.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 md:w-5/12">
              <div className="mx-auto mb-6 w-full rounded-lg border border-gray-200 bg-white p-3 font-light text-gray-800">
                <div className="mb-3 flex w-full items-center">
                  <div className="w-32">
                    <span className="font-semibold text-gray-600">Contact</span>
                  </div>
                  <div className="flex-grow pl-3">
                    <span>Scott Windon</span>
                  </div>
                </div>
                <div className="flex w-full items-center">
                  <div className="w-32">
                    <span className="font-semibold text-gray-600">
                      Billing Address
                    </span>
                  </div>
                  <div className="flex-grow pl-3">
                    <span>123 George Street, Sydney, NSW 2000 Australia</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto mb-6 w-full rounded-lg border border-gray-200 bg-white font-light text-gray-800">
                <div className="w-full border-b border-gray-200 p-3">
                  <div className="mb-5">
                    <label
                      htmlFor="type1"
                      className="flex cursor-pointer items-center"
                    >
                      <input
                        type="radio"
                        className="form-radio h-5 w-5 text-indigo-500"
                        name="paymentMethod"
                        id="type1"
                        value="card"
                        checked={selectedPaymentMethod === "card"}
                        onChange={() => setSelectedPaymentMethod("card")}
                      />
                      <img
                        src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                        className="ml-3 h-6"
                        alt="Card"
                      />
                    </label>
                  </div>
                  <div>
                    <div className="mb-3">
                      <label className="mb-2 ml-1 text-sm font-semibold text-gray-600">
                        Name on card
                      </label>
                      <div>
                        <input
                          className="mb-1 w-full rounded-md border border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                          placeholder="John Smith"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="mb-2 ml-1 text-sm font-semibold text-gray-600">
                        Card number
                      </label>
                      <div>
                        <input
                          className="mb-1 w-full rounded-md border border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                          placeholder="0000 0000 0000 0000"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="-mx-2 mb-3 flex items-end">
                      <div className="w-1/4 px-2">
                        <label className="mb-2 ml-1 text-sm font-semibold text-gray-600">
                          Expiration date
                        </label>
                        <div>
                          <select className="form-select mb-1 w-full cursor-pointer rounded-md border border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none">
                            <option value="01">01 - January</option>
                            <option value="02">02 - February</option>
                            <option value="03">03 - March</option>
                            <option value="04">04 - April</option>
                            <option value="05">05 - May</option>
                            <option value="06">06 - June</option>
                            <option value="07">07 - July</option>
                            <option value="08">08 - August</option>
                            <option value="09">09 - September</option>
                            <option value="10">10 - October</option>
                            <option value="11">11 - November</option>
                            <option value="12">12 - December</option>
                          </select>
                        </div>
                      </div>
                      <div className="w-1/4 px-2">
                        <select className="form-select mb-1 w-full cursor-pointer rounded-md border border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none">
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                          <option value="2028">2028</option>
                          <option value="2029">2029</option>
                          <option value="2030">2030</option>
                          <option value="2031">2031</option>
                          <option value="2032">2032</option>
                        </select>
                      </div>
                      <div className="w-1/4 px-2">
                        <label className="mb-2 ml-1 text-sm font-semibold text-gray-600">
                          Security code
                        </label>
                        <div>
                          <input
                            className="mb-1 w-full rounded-md border border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                            placeholder="000"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full p-3">
                  <label
                    htmlFor="type2"
                    className="flex cursor-pointer items-center"
                  >
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 text-indigo-500"
                      name="paymentMethod"
                      id="type2"
                      value="paypal"
                      checked={selectedPaymentMethod === "paypal"}
                      onChange={() => setSelectedPaymentMethod("paypal")}
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                      width="80"
                      className="ml-3"
                      alt="PayPal"
                    />
                  </label>
                </div>
              </div>
              <div>
                <button className="mx-auto block w-full max-w-xs rounded-lg bg-indigo-500 px-3 py-2 font-semibold text-white hover:bg-indigo-700 focus:bg-indigo-700">
                  <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
