import React from "react";

const ErrorComponent = ({ errorMessage }) => {
  return (
    <div className="font-bolt mt-4 flex w-full flex-col text-center text-red-800">
      <p>There's something wrong going on... </p>
      <p>
        Maybe fix this? <strong>{errorMessage}</strong>
      </p>
    </div>
  );
};

export default ErrorComponent;
