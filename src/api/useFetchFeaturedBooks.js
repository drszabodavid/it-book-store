import { useState, useEffect } from "react";
import { featuredUrl } from "../constants/api";
import useFetch from "./useFetch";

const useFetchFeaturedBooks = () => {
  const { data, isLoading, error } = useFetch(featuredUrl);
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    if (!isLoading && data) {
      console.log(data);
      const { books } = data;
      setBookData(books);
    }
  }, [isLoading, data]);

  return { bookData, isLoading, error };
};

export default useFetchFeaturedBooks;
