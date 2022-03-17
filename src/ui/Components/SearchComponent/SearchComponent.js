import React, { useState, useEffect, useContext } from "react";
import { CategoryBox, SearchField } from "..";
import useFetch from "../../../api/useFetch";
import { displayError } from "../../../utils/notifications";
import { searchUrl, minSearchCharacters } from "../../../constants/api";
import { categories } from "../../../constants/categories";
import { Context } from "../../App";

const SearchComponent = ({
  setSearchData,
  setSearchLoading,
  refresh,
  currentPage,
  resetPage,
  setPage,
}) => {
  const {
    page,
    searchTerm,
    setSearchTerm,
    backButtonClicked,
    setBackButtonClicked,
  } = useContext(Context);
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
      setBackButtonClicked(false);
    }
  }, [isLoading, error, data]);

  useEffect(() => {
    if (page && searchTerm) {
      setPage(page);
      setSearchValue(searchTerm);
      setQuickSearch(searchTerm);
      setUrl(`${searchUrl}/${searchTerm}/${page}`);
    }
  }, [page, searchTerm, backButtonClicked]);

  useEffect(() => {
    const value = !!searchValue ? searchValue : quickSearch;
    if (value) setUrl(`${searchUrl}/${value}/${currentPage}`);
  }, [currentPage]);

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
      setSearchTerm(searchValue);
      resetPage();
      setUrl(`${searchUrl}/${searchValue}/${currentPage}`);
    } else {
      displayError(
        `You need to type in minimum ${minSearchCharacters} characters`
      );
    }
  };

  const handleQuickSearch = (category) => {
    setQuickSearch(category);
    setSearchTerm(category);
    setSearchValue("");
    resetPage();
    setUrl(`${searchUrl}/${category}/${currentPage}`);
  };

  const handleValueChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    setQuickSearch("");
  };

  return (
    <>
      <div className="flex-wrap items-center self-center justify-between hidden w-full pt-4 gap-x-4 md:flex md:w-2/3 md:flex-row lg:visible">
        {categories.map((category) => {
          return (
            <CategoryBox
              key={category}
              category={category}
              handleQuickSearch={handleQuickSearch}
              quickSearch={quickSearch}
            />
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
