import React from "react";

const DividerText = ({ isSearch }) => {
  return (
    <div className="flex flex-row place-content-center">
      <div className="invisible relative sm:visible sm:w-2/4">
        <div className="bg-sandyBrown/50 absolute top-2/3 left-6 h-1 w-full" />
        <div className="bg-sandyBrown/50 absolute top-1/2 left-6 h-1 w-full" />
      </div>
      <h3 className="text-sandyBrown/80 pointer-events-none my-2 text-center text-2xl font-bold uppercase tracking-widest sm:text-3xl">
        {isSearch ? "Search Results" : "Featured Books"}
      </h3>
      <div className="invisible relative sm:visible sm:w-2/4">
        <div className="bg-sandyBrown/50 absolute top-2/3 right-6 h-1 w-full"></div>
        <div className="bg-sandyBrown/50 absolute top-1/2 right-6 h-1 w-full"></div>
      </div>
    </div>
  );
};

export default DividerText;
