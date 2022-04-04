import React, { createContext, useState } from "react";
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
import { ShoppingCartIcon } from "./Components/Icons";
export const Context = createContext("Default Value");

const App = () => {
  const [page, setPage] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [backButtonClicked, setBackButtonClicked] = useState(false);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Context.Provider
        value={{
          page,
          setPage,
          searchTerm,
          setSearchTerm,
          backButtonClicked,
          setBackButtonClicked,
        }}
      >
        <UserHeader />
        <ShoppingCartIcon />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="books/:bookId" element={<BookDetails />} />
          <Route path="featured/:bookId" element={<BookDetails />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="wishlist/:bookId" element={<BookDetails />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
};

export default App;
