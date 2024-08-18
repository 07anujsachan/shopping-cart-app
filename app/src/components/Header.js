import React from "react";

export const Header = ({ handleCartOpen, cartItems, handelAddItemsToCart }) => {
  return (
    <div className="flex justify-between items-center bg-blue-600 w-full fixed top-0 p-4">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        Shopping Cart
      </h1>
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={handleCartOpen}
      >
        <img
          className="p-2 w-8 sm:w-10 lg:w-12"
          src="/products/bag-icon.png"
          alt="cart"
        />
        <p className="text-white text-lg sm:text-xl ml-2">Cart</p>
      </div>
    </div>
  );
};
