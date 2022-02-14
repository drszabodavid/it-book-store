import React from "react";
import { BookCard, DividerText } from "../../Components";
import { ErrorHandlingComponent } from "../../Components/APIComponents";

const ResultsPage = ({ searchData, isSearchLoading }) => {
  return (
    <div className="flex flex-col w-screen h-full bg-leanderWeb">
      <DividerText isSearch />
      {isSearchLoading ? (
        <ErrorHandlingComponent isLoading={isSearchLoading} />
      ) : (
        <div className="flex flex-wrap self-center justify-center w-3/4">
          {searchData.map((book) => {
            return <BookCard book={book} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ResultsPage;
