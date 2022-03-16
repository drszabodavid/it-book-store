import React from "react";

const DividerText = ({ isSearch }) => {
  return (
    <div className="flex flex-row place-content-center">
      <div className="relative invisible sm:visible sm:w-2/4">
        <div className="absolute w-full h-1 bg-sandyBrown/50 top-2/3 left-6" />
        <div className="absolute w-full h-1 bg-sandyBrown/50 top-1/2 left-6" />
      </div>
      <h3 className="my-2 text-2xl font-bold tracking-widest text-center uppercase pointer-events-none text-sandyBrown/80 sm:text-3xl">
        {isSearch ? "Search Results" : "Featured Books"}
      </h3>
      <div className="relative invisible sm:visible sm:w-2/4">
        <div className="absolute w-full h-1 bg-sandyBrown/50 top-2/3 right-6"></div>
        <div className="absolute w-full h-1 bg-sandyBrown/50 top-1/2 right-6"></div>
      </div>
    </div>
  );
};

export default DividerText;
