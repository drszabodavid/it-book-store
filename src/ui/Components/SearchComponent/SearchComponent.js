import React, { useState, useEffect } from "react";
import { SearchField } from "..";
import useFetch from "../../../api/useFetch";
import { displayError } from "../../../utils/notifications";
import { searchUrl, minSearchCharacters } from "../../../constants/api";
import { categories } from "../../../constants/categories";

const SearchComponent = ({ setSearchData, setSearchLoading, refresh }) => {
  const [url, setUrl] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [quickSearch, setQuickSearch] = useState("");
  const { data, isLoading, error } = useFetch(url);

  useEffect(() => {
    if (isLoading) setSearchLoading(true);
    if (!isLoading && !error && data) {
      const { books } = { ...data };
      setSearchData(books);
      setSearchLoading(false);
    }
  }, [isLoading, error, data]);

  useEffect(() => {
    setSearchValue("");
    setQuickSearch("");
  }, [refresh]);

  const validateSearch = (searchValue) => {
    return !!searchValue && searchValue.length >= 3;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (validateSearch(searchValue)) {
      setUrl(`${searchUrl}/${searchValue}`);
    } else {
      displayError(
        `You need to type in minimum ${minSearchCharacters} characters`
      );
    }
  };

  const handleQuickSearch = (category) => {
    setQuickSearch(category);
    setSearchValue("");
    setUrl(`${searchUrl}/${category}`);
  };

  const handleValueChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    setQuickSearch("");
  };

  return (
    <>
      <div className="flex flex-wrap items-center self-center w-full pt-4 gap-x-4 md:w-2/3 md:flex-row">
        Quick search:
        {categories.map((category) => {
          return (
            <div
              key={category}
              onClick={() => handleQuickSearch(category)}
              className={`text-sx mb-2 flex h-10 w-24 cursor-pointer items-center justify-center rounded-lg border-gray-500 bg-white shadow-sm md:mb-0 ${
                quickSearch === category && "bg-sandyBrown"
              }`}
            >
              {category}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col w-full place-content-center">
        <SearchField
          value={searchValue}
          placeholder="Enter a title"
          handleSubmit={handleSearch}
          handleValueChange={handleValueChange}
          handleSearchClick={handleSearch}
        />
      </div>
    </>
  );
};

export default SearchComponent;
