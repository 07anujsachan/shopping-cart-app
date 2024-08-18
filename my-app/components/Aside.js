import React, { useState } from "react";
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export const Aside = ({ activeSize, handleActiveSize, setActiveFilter }) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setActiveFilter(e.target.value);
  };
  return (
    <div className="md:w-1/4 w-full mb-8 md:mb-0 md:pt-24 pt-8 md:pb-0 pb-8 bg-white shadow-2xl">
      <div className="px-6">

    
      <h2 className="size text-xl  text-blue-600">Sizes-</h2>

      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => handleActiveSize(size)}
          className={
            activeSize.includes(size)
              ? "text-[#eac000] w-11 h-11 rounded-full m-[0.7rem] border-none bg-black"
              : "w-[45px] h-[45px] rounded-full my-[0.7rem] mx-[0.9rem] border-none bg-[#ececec] hover:border-[1.5px] border"
          }
        >
          {size}
        </button>
      ))}
        </div>
      <div className="mt-8">
        <div className="text-xl text-blue-600 px-5">More Filters</div>
        <select onChange={handleFilterChange} value={filter} className="w-full  border mt-4 py-4 px-6">
          <option value="">Price</option>
          <option value="lowesttohighest">Low to High</option>
          <option value="highesttolowest">High to Low</option>
        </select>
      </div>
    </div>
  );
};