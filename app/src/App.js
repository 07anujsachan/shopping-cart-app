import React, { useState } from "react";
import { Aside } from "./components/Aside";
import { Shopping } from "./components/Shopping";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";

const App = () => {
  const [activeSize, setActiveSize] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");

  const handleAddItemsToCart = (item) => {
    const addedCart = cartItems.find((pro) => pro.id === item.id);
    if (addedCart) {
      handleIncrement(item.id);
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...item, quantity: 1 },
      ]);
    }
  };

  const handleActiveSize = (size) => {
    if (activeSize.includes(size)) {
      setActiveSize((prevActiveSize) => prevActiveSize.filter((s) => s !== size));
    } else {
      setActiveSize((prevActiveSize) => [...prevActiveSize, size]);
    }
  };

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleIncrement = (id) => {
    setCartItems((prevCartItems) => 
      prevCartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prevCartItems) => 
      prevCartItems.map((item) =>
        item.id === id ? (item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : deleteCartItem(item.id)) : item
      )
    );
  };

  const deleteCartItem = (id) => {
    setCartItems((prevCartItems) => 
      prevCartItems.filter((item) => item.id !== id)
    );
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <Header handleCartOpen={handleCartOpen} cartItems={cartItems}
   />
      <div className="max-w-[1700px] w-full mx-auto p-8 bg-[#f3f7fa] flex justify-between">
        <Aside activeSize={activeSize} handleActiveSize={handleActiveSize} 
            setActiveFilter={setActiveFilter}/>
        <Shopping
          activeSize={activeSize}
          handleCartOpen={handleCartOpen}
          cartItems={cartItems}
          handleAddItemsToCart={handleAddItemsToCart}
          activeFilter={activeFilter}
        />
      </div>
      <Cart
        isCartOpen={isCartOpen}
        handleCartClose={handleCartClose}
        cartItems={cartItems}
        deleteCartItem={deleteCartItem}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </>
  );
};

export default App;
