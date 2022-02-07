import React, { useState, useEffect } from "react";
import { SearchField } from "..";
import useFetch from "../../../api/useFetch";
import PropTypes from "prop-types";
import { displayError } from "../../../utils/notifications";
import { searchUrl, minSearchCharacters } from "../../../constants/api";

const SearchComponent = ({ setBookData }) => {
  const [url, setUrl] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const { data: searchData, isLoading, error } = useFetch(url);

  useEffect(() => {
    if (!isLoading && !error && searchData) {
      console.log(searchData);
      const { books } = { ...searchData };
      if (!isLoading && !error && books) setBookData(books);
    }
  }, [isLoading, error, searchData]);

  const validateSearch = (searchValue) => {
    return !!searchValue && searchValue.length >= 3;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (validateSearch(searchValue)) {
      setUrl(`${searchUrl} + ${searchValue}`);
    } else {
      displayError(
        `You need to type in minimum ${minSearchCharacters} characters`
      );
    }
  };

  return (
    <div className="flex w-full flex-col place-content-center">
      <SearchField
        value={searchValue}
        placeholder="Enter a books name"
        handleSubmit={handleSearch}
        handleValueChange={setSearchValue}
        handleSearchClick={handleSearch}
      />
    </div>
  );
};

export default SearchComponent;

SearchComponent.propTypes = {
  setBookData: PropTypes.func.isRequired,
};
