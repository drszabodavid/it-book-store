import React from "react";

const CategoryBox = ({ category, handleQuickSearch, quickSearch }) => {
  return (
    <div
      onClick={() => handleQuickSearch(category)}
      className={`text-sx hover:bg-sandyBrown/50 xl:w-1/13 my-2 flex h-10 w-1/6 cursor-pointer items-center justify-center rounded-lg border-gray-500 bg-white shadow-sm md:mb-0 ${
        quickSearch === category && "bg-sandyBrown hover:bg-sandyBrown"
      }`}
    >
      {category}
    </div>
  );
};

export default CategoryBox;
