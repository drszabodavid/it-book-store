import React from "react";
import useFetchFeaturedBooks from "../../../api/useFetchFeaturedBooks";
import { DividerText, FeaturedCarousel } from "../../Components";
import { ErrorHandlingComponent } from "../../Components/APIComponents";

const FeaturedPage = () => {
  const {
    bookData: featuredBookData,
    isLoading: IsFeaturedDataLoading,
    error: featuredDataError,
  } = useFetchFeaturedBooks();

  return (
    <>
      <DividerText />
      <div className="flex flex-col items-center h-min">
        <ErrorHandlingComponent
          isLoading={IsFeaturedDataLoading}
          error={featuredDataError}
        />
        {!IsFeaturedDataLoading && (
          <FeaturedCarousel books={featuredBookData} />
        )}
      </div>
    </>
  );
};

export default FeaturedPage;
