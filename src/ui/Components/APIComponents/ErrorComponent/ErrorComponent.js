import React from "react";

const ErrorComponent = ({ errorMessage }) => {
  return (
    <div className="flex w-full mt-4 flex-col text-center text-red-800 font-bolt">
      <p>There's something wrong going on... </p>
      <p>
        Maybe fix this? <strong>{errorMessage}</strong>
      </p>
    </div>
  );
};

export default ErrorComponent;
