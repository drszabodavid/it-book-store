import { useState } from "react";

const usePagination = () => {
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    setPage((value) => value + 1);
  };

  const handlePreviousPage = () => {
    if (page - 1 >= 1) {
      setPage((value) => value - 1);
    }
  };

  const resetPage = () => {
    setPage(1);
  };

  return { page, handleNextPage, handlePreviousPage, resetPage };
};

export default usePagination;
