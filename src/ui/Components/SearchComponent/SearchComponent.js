import React, { useState } from "react";
import { SearchField } from "..";
import useFetch from "../../../api/useFetch";

const SearchComponent = ({ initialBookData, setBookData }) => {
  // TODO -> add proptypes

  const [searchValue, setSearchValue] = useState("");
  const BASE_URL = "https://api.itbook.store/1.0/search/";
  const [url, setUrl] = useState("");
  const { data: searchData, isLoading, error } = useFetch(url);

  const validateSearch = (searchValue) => {
    return !!searchValue && searchValue.length >= 3;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSearch(searchValue)) setUrl(`${BASE_URL} + ${searchValue}`);
  };

  const handleValueChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);

    if (validateSearch(searchValue)) {
      setUrl(`${BASE_URL} + ${searchValue}`);
      handleSearch();
    } else if (searchValue.length <= 1) {
      setBookData(initialBookData);
    }
  };

  const handleSearch = () => {
    const { books } = { ...searchData };
    if (!isLoading && !error && books) setBookData(books);
  };

  return (
    <div className="flex w-full flex-col place-content-center">
      <SearchField
        value={searchValue}
        placeholder="Enter a books name"
        handleSubmit={handleSubmit}
        handleValueChange={handleValueChange}
      />
    </div>
  );
};

export default SearchComponent;
