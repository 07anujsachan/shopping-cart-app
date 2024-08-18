import React from "react";

export const Cart = ({
  cartItems,
  isCartOpen,
  handleCartClose,
  deleteCartItem,
  handleDecrement,
  handleIncrement,
}) => {
  const handleSubmit = (totalBill) => {
    alert(`Your total bill is $${totalBill}`);
  };

  const totalBill = cartItems.reduce(
    (acc, cv) => acc + cv.price * cv.quantity,
    0
  );

  return (
    <div
      className={`bg-white md:w-1/3 lg:w-1/3 w-full p-4 fixed top-0 right-0 h-screen z-50 ${
        isCartOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src="/products/bag-icon.png" alt="Cart Icon" className="w-8" />
          <span className="text-[#212121] text-3xl font-semibold ml-4">Cart</span>
        </div>
        <button
          onClick={handleCartClose}
          className="text-[#212121] text-2xl focus:outline-none"
        >
          ×
        </button>
      </div>
      <div className="overflow-y-scroll h-[60%] mt-8">
        {cartItems.map((item) => (
          <div
            className="flex justify-between w-full mx-auto my-4 h-44 py-4 border-t-2 border-b-2"
            key={item.id}
          >
            <div className="flex-shrink-0 w-1/4">
              <img
                className="h-full w-full "
                src={`/products/${item.sku}_2.jpg`}
                alt={item.title}
              />
            </div>
            <div className="w-1/2 h-full pl-4">
              <h2 className="text-[#212121] text-lg">{item.title}</h2>
              <h3 className="text-gray-400 md:text-xl text-sm mt-3">
                {`${item.availableSizes[0]} | ${item.style}`}
              </h3>
              <h3 className="text-[#757576] text-xl">
                Quantity: {item.quantity}
              </h3>
            </div>
            <div className="w-1/4 h-full flex flex-col justify-between items-end">
              <button
                onClick={() => deleteCartItem(item.id)}
                className="text-2xl text-[#eac000] focus:outline-none"
              >
                ×
              </button>
              <p className="text-[#eac000] text-xl">
                {item.currencyFormat}
                {item.price}
              </p>
              <div className="flex">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="bg-slate-200 px-2 focus:outline-none"
                >
                  -
                </button>
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="bg-slate-200 px-2 focus:outline-none"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full border-t-2 pt-8 mt-8">
        <div className="flex justify-between">
          <h2 className="text-[#5b5a5e] text-2xl uppercase">Subtotal</h2>
          <div>
            <h3 className="text-[#eac000] text-lg">${totalBill.toFixed(2)}</h3>
            <h3 className="text-[#5b5a5e]">
              or 4 X ${(totalBill / 4).toFixed(2)}
            </h3>
          </div>
        </div>
        <button
          className="bg-black text-center w-full mt-4 py-4 text-white text-xl focus:outline-none"
          onClick={() => handleSubmit(totalBill)}
          type="submit"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
