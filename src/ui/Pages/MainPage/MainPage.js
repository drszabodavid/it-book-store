import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import usePagination from "../../../api/usePagination";
import { SearchComponent } from "../../Components";
import FeaturedPage from "../FeaturedPage/FeaturedPage";
import ResultsPage from "../ResultsPage/ResultsPage";

// add single book page
// add proptypes

const MainPage = () => {
  const location = useLocation();
  const [searchData, setSearchData] = useState(null);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const {
    page: currentPage,
    handleNextPage,
    handlePreviousPage,
    resetPage,
  } = usePagination();

  useEffect(() => {
    const { shouldRefresh } = { ...location?.state };
    if (shouldRefresh) {
      setSearchData(null);
      setRefresh((value) => !value);
    }
  }, [location]);

  return (
    <div className="flex flex-col w-full bg-leanderWeb h-full/header">
      <SearchComponent
        setSearchData={setSearchData}
        setSearchLoading={setIsSearchLoading}
        refresh={refresh}
        currentPage={currentPage}
        resetPage={resetPage}
      />

      {!searchData && <FeaturedPage />}

      {searchData && (
        <ResultsPage
          searchData={searchData}
          isSearchLoading={isSearchLoading}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default MainPage;
