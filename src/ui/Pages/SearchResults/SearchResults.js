import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BookCard, DividerText, SearchComponent } from "../../Components";
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
    <div className="flex flex-col w-full h-full bg-leanderWeb">
      <SearchComponent currentQuickSearchValue={quickSearch} />
      <DividerText isSearch />
      <ErrorHandlingComponent isLoading={isLoading} />

      <div className="flex flex-wrap self-center justify-center w-3/4">
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
