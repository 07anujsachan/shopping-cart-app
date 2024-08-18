import React from "react";
import data from "./data.json";

export const Shopping = ({ activeSize, cartItems, handleAddItemsToCart, activeFilter }) => {
  const handleProducts = () => {
    let displayedProducts = [...data.products];

    if (activeSize.length > 0) {
      displayedProducts = displayedProducts.filter((product) => {
        for (const size of activeSize) {
          if (product.availableSizes.includes(size)) {
            return true;
          }
        }
        return false;
      });
    }

    if (activeFilter === "lowesttohighest") {
      displayedProducts = displayedProducts.sort((a, b) => a.price - b.price);
    }

    if (activeFilter === "highesttolowest") {
      displayedProducts = displayedProducts.sort((a, b) => b.price - a.price);
    }

    return displayedProducts;
  };

  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const products = handleProducts();

  return (
    <>
      <div className="w-full">
        <div className="flex between pb-28 pl-10">
          <span>{`${products.length} products found`}</span>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4">
          {products.map((product) => (
            <div className="group" key={product.sku}>
              <figure>
                <img
                  className="w-full"
                  src={`/products/${product.sku}_1.jpg`}
                  alt={product.title}
                />
              </figure>
              <div className="flex justify-center items-center flex-col padding">
                <h2 className="text-2xl text-center my-3">{product.title}</h2>
                <div className="w-2/12 bg-[#eac000] text-center h-[2px]"></div>
                <h2 className="text-xl text-center my-3">
                  {product.currencyFormat + product.price}
                </h2>
                <h3 className="text-xl text-center mb-3 ml-3">{`or 4 x ${
                  product.currencyFormat + product.price / 4
                }`}</h3>
              </div>
              <button
                onClick={() => handleAddItemsToCart(product)}
                className="bg-black w-full text-white border-0 py-4 text-xl add-cart group-hover:bg-[#eac000]"
              >
                {isProductInCart(product.id) ? "Added to cart" : "Add to cart"}
              </button>
              {product.isFreeShipping && (
                <p className="bg-black relative bottom-[41.3rem] w-1/3 text-xs left-[13rem] text-white capitalize text-center py-[0.6rem]">
                  Free Shipping
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
