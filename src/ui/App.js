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
import {
  Routes,
  Route,
  BrowserRouter,
  HashRouter,
  Navigate,
} from "react-router-dom";
import { UserHeader } from "./Components";
import { basePath } from "../constants/api";
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
        <Routes>
          <Route path={`${basePath}/`} element={<MainPage />} />
          <Route path="/" element={<Navigate replace to={`${basePath}/`} />} />
          <Route path={`${basePath}/books/:bookId`} element={<BookDetails />} />
          <Route
            path={`${basePath}/featured/:bookId`}
            element={<BookDetails />}
          />
          {/* <Route path="wishlist" element={<WishList />} />
          <Route path="wishlist/:bookId" element={<BookDetails />} />
          <Route path="checkout" element={<CheckoutPage />} /> */}
          {/* <Route path={`${basePath}/*`} element={<ErrorPage />} /> */}
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
};

export default App;
