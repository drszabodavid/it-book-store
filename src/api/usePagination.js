import { useState, useContext } from "react";
import { Context } from "../ui/App";

const usePagination = () => {
  const { setPage: setContextPage } = useContext(Context);

  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    setPage((value) => value + 1);
    setContextPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page - 1 >= 1) {
      setPage((value) => value - 1);
      setContextPage(page - 1);
    }
  };

  const resetPage = () => {
    setPage(1);
    setContextPage(1);
  };

  return { page, handleNextPage, handlePreviousPage, resetPage, setPage };
};

export default usePagination;
