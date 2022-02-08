import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BookCard, FeaturedText, SearchComponent } from "../../Components";
import { ErrorHandlingComponent } from "../../Components/APIComponents";

const SearchResults = () => {
  const location = useLocation();
  const [searchData, setSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quickSearch, setQuickSearch] = useState("");

  useEffect(() => {
    if (location.state) {
      const { books, quickSearch } = location.state;
      setSearchData(books);
      setQuickSearch(quickSearch);
      setIsLoading(false);
    }
  }, [location]);

  return (
    <div className="bg-leanderWeb flex h-full w-full flex-col">
      <SearchComponent currentQuickSearchValue={quickSearch} />
      <FeaturedText isSearch />
      <ErrorHandlingComponent isLoading={isLoading} />

      <div className="flex w-3/4 flex-wrap justify-center self-center">
        {searchData.map((book) => {
          return <BookCard book={book} />;
        })}
      </div>
      <button>previous</button>
      <button>next</button>
    </div>
  );
};

export default SearchResults;
