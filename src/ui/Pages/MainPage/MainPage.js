import React, { useState, useEffect } from "react";
import useFetch from "../../../api/useFetch";
import { ErrorHandlingComponent } from "../../Components/APIComponents";
import {
  FeaturedCarousel,
  FeaturedText,
  SearchComponent,
  UserHeader,
} from "../../Components";

const MainPage = () => {
  const [bookData, setBookData] = useState([]);
  const [initialBookData, setInitialBookData] = useState([]);
  const { data, isLoading, error } = useFetch(
    "https://api.itbook.store/1.0/new"
  );

  useEffect(() => {
    if (!isLoading && data) {
      const { books } = data;
      setBookData(books);
      setInitialBookData(books);
    }
  }, [isLoading, data]);

  return (
    <div className="bg-leanderWeb flex h-screen w-full flex-col overflow-hidden">
      <UserHeader />
      <SearchComponent
        initialBookData={initialBookData}
        setBookData={setBookData}
      />
      <FeaturedText />

      <div className="flex h-min flex-col items-center">
        <ErrorHandlingComponent isLoading={isLoading} error={error} />
        {!isLoading && (
          <>
            <FeaturedCarousel books={bookData} />
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
