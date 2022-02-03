import React from "react";
import { LoadingComponent, ErrorComponent } from "..";

const ErrorHandlingComponent = ({ isLoading, error }) => {
  return (
    <>
      {isLoading && <LoadingComponent />}
      {!isLoading && error && <ErrorComponent errorMessage={error} />}
    </>
  );
};

export default ErrorHandlingComponent;
