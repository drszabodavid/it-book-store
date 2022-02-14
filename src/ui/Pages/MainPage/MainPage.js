import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SearchComponent } from "../../Components";
import FeaturedPage from "../FeaturedPage/FeaturedPage";
import ResultsPage from "../ResultsPage/ResultsPage";

const MainPage = () => {
  const location = useLocation();
  const [searchData, setSearchData] = useState(null);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

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
      />

      {!searchData && <FeaturedPage />}
      {searchData && (
        <ResultsPage
          searchData={searchData}
          isSearchLoading={isSearchLoading}
        />
      )}
    </div>
  );
};

export default MainPage;
