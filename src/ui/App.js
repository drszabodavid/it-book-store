import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainPage } from "./Pages";

const App = () => {
  return (
    <>
      <ToastContainer />
      <MainPage />
    </>
  );
};

export default App;
