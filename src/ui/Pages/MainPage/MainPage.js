import React, { useState, useEffect } from "react";
import useFetch from "../../../api/useFetch";
import { ErrorHandlingComponent } from "../../Components/APIComponents";
import {
  FeaturedCarousel,
  FeaturedText,
  SearchComponent,
} from "../../Components";
import { featuredUrl } from "../../../constants/api";

const MainPage = () => {
  const [bookData, setBookData] = useState([]);
  const { data, isLoading, error } = useFetch(featuredUrl);

  useEffect(() => {
    if (!isLoading && data) {
      const { books } = data;
      setBookData(books);
    }
  }, [isLoading, data]);

  return (
    <div className="bg-leanderWeb h-full/header flex w-full flex-col">
      <SearchComponent />
      <FeaturedText />
      <div className="flex h-min flex-col items-center">
        <ErrorHandlingComponent isLoading={isLoading} error={error} />
        {!isLoading && <FeaturedCarousel books={bookData} />}
      </div>
    </div>
  );
};

export default MainPage;
