import React from "react";
import { useState } from "react";
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export const Aside = ({ activeSize, handleActiveSize, setActiveFilter }) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setActiveFilter(e.target.value);
  };
  return (
    <div className="w-1/4 pt-24">
      <h2 className="size">Sizes-</h2>

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
      <div>
        <span>Filter by:</span>
        <select onChange={handleFilterChange} value={filter}>
          <option value="">Select</option>
          <option value="lowesttohighest">Low to High</option>
          <option value="highesttolowest">High to Low</option>
        </select>
      </div>
    </div>
  );
};
