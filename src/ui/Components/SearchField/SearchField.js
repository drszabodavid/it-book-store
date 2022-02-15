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
      className="relative flex items-center self-center w-1/2 mt-6 mb-2 rounded-xl"
    >
      <input
        onChange={handleValueChange}
        type="text"
        value={value}
        placeholder={placeholder}
        className="w-full h-12 p-3 placeholder-gray-500 placeholder-opacity-50 outline-none bg-sandyBrown/30 hover:bg-sandyBrown/50 focus:bg-sandyBrown/50 rounded-xl"
        maxLength="50"
      />

      <div
        onClick={handleSearchClick}
        className="absolute right-0 flex items-center justify-center w-16 h-12 mr-0 bg-sandyBrown/50 rounded-r-xl"
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
