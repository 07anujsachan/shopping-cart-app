import { useState } from "react";
import { Aside } from "../components/Aside";
import { Cart } from "../components/Cart";
import { Header } from "../components/Header";
import { Shopping } from "../components/Shopping";
import { data } from "../public/data";

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
    handleCartOpen();
  };

  const handleActiveSize = (size) => {
    if (activeSize.includes(size)) {
      setActiveSize((prevActiveSize) =>
        prevActiveSize.filter((s) => s !== size)
      );
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
        item.id === id
          ? item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : deleteCartItem(item.id)
          : item
      )
    );
  };

  const deleteCartItem = (id) => {
    setCartItems((prevCartItems) =>
    prevCartItems.map((item) =>
      item?.id === id
        ? { ...item, quantity: item?.quantity > 1 ? item?.quantity - 1 : 0 }
        : item
    ).filter((item) => item?.quantity > 0)
  );
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <Header handleCartOpen={handleCartOpen} cartItems={cartItems} />
      <div
        className={`w-full mx-auto mt-16  px-2 py-6 bg-[#e9e6e6] flex justify-between flex-col md:flex-row ${
          isCartOpen ? "opacity-50" : ""
        } `}
      >
        <Aside
          activeSize={activeSize}
          handleActiveSize={handleActiveSize}
          setActiveFilter={setActiveFilter}
        />
        <Shopping
          activeSize={activeSize}
          handleCartOpen={handleCartOpen}
          cartItems={cartItems}
          handleAddItemsToCart={handleAddItemsToCart}
          activeFilter={activeFilter}
          data={data}
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