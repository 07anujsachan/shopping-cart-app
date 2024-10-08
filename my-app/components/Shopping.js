import React from "react";



export const Shopping = ({
  activeSize,
  cartItems,
  handleAddItemsToCart,
  activeFilter,
  data,
}) => {
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
      <div className="md:w-[74%] w-full">
        <div className="bg-white py-10">
          <div className="flex between mb-12 pl-10 underline">
            <span className="text-blue-600">{`⁠${products.length} products found`}</span>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4 px-4 md:px-0">
            {products.map((product) => (
              <div className="group h-max hover:shadow-2xl border md:border-none shadow-xl mb-8" key={product.sku}>
                <figure className="relative">
                  <img
                    className="w-full"
                    src={`/products/${product.sku}_1.jpg`}
                    alt={product.title}
                  />
                  {product.isFreeShipping && (
                    <p className="bg-black absolute top-0 right-0 w-1/3 text-xs  text-white capitalize text-center py-2">
                      Free Shipping
                    </p>
                  )}
                </figure>
                <div className="flex justify-center items-center flex-col padding">
                  <h2 className="text-base text-center my-3">{product.title}</h2>
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
                  {isProductInCart(product.id)
                    ? "Added to cart"
                    : "Add to cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};