import React from "react";

export const Header = ({ handleCartOpen, cartItems, handelAddItemsToCart }) => {
  const totalItems = cartItems.length;
  return (
    <div className="flex justify-between items-center bg-blue-600 w-full fixed top-0 p-4 z-50">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        Shopping <span className="text-yellow-400">Cart</span>
      </h1>
      {/* <div
        className="flex justify-center items-center cursor-pointer"
        onClick={handleCartOpen}
      >
        <img
          className="p-2 w-8 sm:w-10 lg:w-12"
          src="/products/bag-icon.png"
          alt="cart"
        />
        {totalItems > 0 && (
          <span className="absolute top-4 right-0  text-red-500  rounded-full w-6 h-6 flex items-center justify-center">
            {totalItems}
          </span>
        )}
        <p className="text-white text-lg sm:text-xl ml-2">Cart</p>
      </div> */}
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={handleCartOpen}
      >
        <div className="relative">
          <img
            className="p-2 w-8 sm:w-10 lg:w-12"
            src="/products/bag-icon.png"
            alt="cart"
          />
          {totalItems > 0 && (
            <span className="absolute bottom-0 right-0 bg-[#eac000] text-base p-2 text-black rounded-full md:w-5 md:h-5 h-3 w-3 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
        <p className="text-white text-lg sm:text-xl ml-2">Cart</p>
      </div>
    </div>
  );
};
