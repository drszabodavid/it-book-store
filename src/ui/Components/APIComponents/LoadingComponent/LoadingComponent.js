import React from "react";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const LoadingComponent = () => {
  return (
    <div className="mt-4 flex w-full flex-col items-center">
      <LoadingSpinner />

      <div className="font-bolt text-sandyBrown mt-4 flex w-full flex-col text-center">
        I'm loading, please wait...
      </div>
    </div>
  );
};

export default LoadingComponent;
