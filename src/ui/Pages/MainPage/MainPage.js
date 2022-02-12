import React, { useState } from "react";
import { SearchComponent } from "../../Components";
import FeaturedPage from "../FeaturedPage/FeaturedPage";
import ResultsPage from "../ResultsPage/ResultsPage";

const MainPage = () => {
  const [searchData, setSearchData] = useState(null);

  return (
    <div className="flex flex-col w-full bg-leanderWeb h-full/header">
      <SearchComponent setSearchData={setSearchData} />

      {!searchData && <FeaturedPage />}
      {searchData && <ResultsPage searchData={searchData} />}
    </div>
  );
};

export default MainPage;
