import React from "react";
import { BookCard, DividerText } from "../../Components";

const ResultsPage = ({ searchData }) => {
  console.log(searchData);
  return (
    <div className="flex flex-col w-full h-full bg-leanderWeb">
      <DividerText isSearch />
      {/* <ErrorHandlingComponent isLoading={isLoading} /> */}

      <div className="flex flex-wrap self-center justify-center w-3/4">
        {searchData.map((book) => {
          return <BookCard book={book} />;
        })}
      </div>
    </div>
  );
};

export default ResultsPage;
