import React, { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import useFetch from "../../../api/useFetch";
import { basePath, bookDetailsUrl } from "../../../constants/api";
import { Context } from "../../App";
import { ErrorHandlingComponent } from "../../Components/APIComponents";

const BookDetails = () => {
  const { setBackButtonClicked } = useContext(Context);
  const { bookId } = useParams();
  const location = useLocation();
  const url = `${bookDetailsUrl}/${bookId}`;
  const { data, isLoading, error } = useFetch(url);
  const { title, subtitle, desc: description } = { ...data };
  const rowLabels = [
    "Price",
    "Rating",
    "Authors",
    "Publisher",
    "Year",
    "Pages",
  ];

  const isSearchBook = !location.pathname.includes("featured");

  return (
    <div className="flex flex-col w-full bg-leanderWeb h-full/header">
      {(isLoading || error) && (
        <div className="flex items-center justify-center h-full">
          <ErrorHandlingComponent isLoading={isLoading} error={error} />
        </div>
      )}
      {!isLoading && data && (
        <>
          <Link to={basePath}>
            <button
              onClick={() => setBackButtonClicked(isSearchBook)}
              className="absolute left-0 invisible w-16 h-10 m-4 border-2 text-sandyBrown hover:bg-sandyBrown/50 border-sandyBrown bg-sandyBrown/10 rounded-2xl hover:text-white md:visible"
            >
              back
            </button>
          </Link>
          <h1 className="self-center px-12 mt-6 text-3xl text-sandyBrown font-bolt sm:mt-8 sm:p-0 sm:text-4xl sm:font-normal">
            {title}
          </h1>
          {subtitle && (
            <h3 className="self-center px-12 my-4 text-2xl text-justify text-mediumCarmine sm:mt-6 sm:p-0">
              {subtitle}
            </h3>
          )}

          <div className="flex flex-col items-center mt-4 gap-x-12 sm:mt-8 sm:justify-center md:flex-row">
            <div className="flex flex-col mb-4 h-fit w-72 md:mb-0 md:self-start">
              <button className="flex items-center justify-center h-10 mb-4 bg-sandyBrown w-72 rounded-xl">
                Add to cart
              </button>
              <img
                className="object-cover w-full h-full bg-steelTeal/10"
                src={data.image}
                alt="book-cover"
              />
            </div>

            <div className="flex flex-col w-3/4 h-full md:w-1/3">
              <table>
                <tbody>
                  {rowLabels.map((label, index) => {
                    const value = label.toLowerCase();

                    return (
                      <tr
                        className={`${
                          index % 2 === 0
                            ? "bg-steelTeal/50"
                            : "bg-steelTeal/10"
                        } h-10`}
                      >
                        <td className="w-1/4 px-2 font-bold border-r-2 border-white">
                          {label}
                        </td>
                        <td className="p-2">{data[value]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="mt-4 text-justify">{description}</p>

              <div className="flex justify-center w-full">
                <Link to={basePath}>
                  <button className="flex items-center justify-center visible h-10 my-4 mb-4 bg-steelTeal/50 w-72 rounded-xl sm:invisible">
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookDetails;
