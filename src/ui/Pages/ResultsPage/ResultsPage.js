import React from "react";
import { BookCard, DividerText } from "../../Components";
import { ErrorHandlingComponent } from "../../Components/APIComponents";

const ResultsPage = ({
  searchData,
  isSearchLoading,
  handleNextPage,
  handlePreviousPage,
  currentPage,
}) => {
  const buttonStyle =
    "text-sx mb-2 flex h-10 w-24 cursor-pointer items-center justify-center rounded-lg border-gray-500 bg-white shadow-sm hover:bg-sandyBrown/50 focus:bg-sandyBrown";
  const disabledButtonStyle = "disabled:cursor-not-allowed disabled:opacity-30";
  const previousButtonDisabled = currentPage <= 1;
  const nextButtonDisabled = searchData?.length < 10;

  return (
    <div className="flex flex-col w-full h-auto bg-leanderWeb">
      <DividerText isSearch />
      <div className="flex flex-row justify-center my-2 gap-x-8">
        <button
          onClick={handlePreviousPage}
          className={`${buttonStyle} ${disabledButtonStyle}`}
          disabled={previousButtonDisabled}
        >
          previous
        </button>
        <button
          onClick={handleNextPage}
          className={`${buttonStyle} ${disabledButtonStyle}`}
          disabled={nextButtonDisabled}
        >
          next
        </button>
      </div>
      {isSearchLoading ? (
        <ErrorHandlingComponent isLoading={isSearchLoading} />
      ) : (
        <div className="flex flex-wrap self-center justify-center w-3/4 h-full">
          {searchData.map((book) => {
            return <BookCard book={book} key={book.isbn13} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ResultsPage;
