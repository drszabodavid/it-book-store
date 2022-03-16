import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BookDetails,
  CheckoutPage,
  ErrorPage,
  MainPage,
  WishList,
} from "./Pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UserHeader } from "./Components";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <UserHeader />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="books/:bookId" element={<BookDetails />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="wishlist/:bookId" element={<BookDetails />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
