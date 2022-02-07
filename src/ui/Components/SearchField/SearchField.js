import React from "react";
import PropTypes from "prop-types";
import { SearchIcon } from "../Icons";

const SearchField = ({
  value,
  placeholder,
  handleSubmit,
  handleValueChange,
  handleSearchClick,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="relative my-4 flex w-1/2 items-center self-center rounded-xl border border-transparent hover:border hover:border-gray-500"
    >
      <input
        onChange={(e) => handleValueChange(e.target.value)}
        type="text"
        value={value}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl bg-gray-400 p-3 text-white placeholder-gray-300 placeholder-opacity-50 caret-white outline-none"
        maxLength="50"
      />

      <div
        onClick={handleSearchClick}
        className="absolute right-0 mr-0 flex h-12 w-16 items-center justify-center rounded-r-xl bg-gray-300"
      >
        <SearchIcon
          size="h-8 w-8"
          extraStyle="cursor-pointer transition duration-300 ease-in-out hover:scale-125"
        />
      </div>
    </form>
  );
};

export default SearchField;

SearchField.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleValueChange: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
};
