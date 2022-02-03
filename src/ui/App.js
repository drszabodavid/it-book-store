import React, { useEffect, useState } from "react";
import useFetch from "../api/useFetch";
import { SearchComponent } from "./Components";
import { ErrorHandlingComponent } from "./Components/api";

const App = () => {
  const [bookData, setBookData] = useState([]);
  const [initialBookData, setInitialBookData] = useState([]);
  const { data, isLoading, error } = useFetch(
    "https://api.itbook.store/1.0/new"
  );

  useEffect(() => {
    if (!isLoading && data) {
      const { books } = data;
      setBookData(books);
      setInitialBookData(books);
    }
  }, [isLoading, data]);

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-gray-500">
      <SearchComponent
        initialBookData={initialBookData}
        setBookData={setBookData}
      />
      <ErrorHandlingComponent isLoading={isLoading} error={error} />
      <h1>Featured Books</h1>
      {!isLoading && bookData?.map(({ title }) => <div>{title}</div>)}
    </div>
  );
};

export default App;
