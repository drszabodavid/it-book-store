import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const useFetchSearchBooks = ({ url }) => {
  const { data, isLoading, error } = useFetch(url);
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const { books } = { ...data };
      setBookData(books);
    }
  }, [isLoading, error, data]);

  return { bookData, isLoading, error };
};

export default useFetchSearchBooks;
