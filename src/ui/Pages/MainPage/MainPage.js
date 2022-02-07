import React, { useState, useEffect } from "react";
import useFetch from "../../../api/useFetch";
import { ErrorHandlingComponent } from "../../Components/APIComponents";
import {
  FeaturedCarousel,
  FeaturedText,
  SearchComponent,
  UserHeader,
} from "../../Components";
import { categories } from "../../../constants/categories";
import { featuredUrl } from "../../../constants/api";

const MainPage = () => {
  const [bookData, setBookData] = useState([]);
  const [initialBookData, setInitialBookData] = useState([]);
  const { data, isLoading, error } = useFetch(featuredUrl);

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
      <div>
        <h2>categories</h2>

        <div className="flex">
          {categories.map((category) => {
            return (
              <div className="flex h-10 w-28 items-center justify-center rounded-lg border-gray-500 bg-white shadow-sm">
                {category}
              </div>
            );
          })}
        </div>
      </div>
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

MainPage.whyDidYouRender = true;
export default MainPage;
