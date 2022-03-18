import React, { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import useFetch from "../../../api/useFetch";
import { bookDetailsUrl } from "../../../constants/api";
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
    <div className="bg-leanderWeb h-full/header flex w-full flex-col">
      {(isLoading || error) && (
        <div className="flex h-full items-center justify-center">
          <ErrorHandlingComponent isLoading={isLoading} error={error} />
        </div>
      )}
      {!isLoading && data && (
        <>
          <Link to="/it-book-store">
            <button
              onClick={() => setBackButtonClicked(isSearchBook)}
              className="text-sandyBrown hover:bg-sandyBrown/50 border-sandyBrown bg-sandyBrown/10 invisible absolute left-0 m-4 h-10 w-16 rounded-2xl border-2 hover:text-white md:visible"
            >
              back
            </button>
          </Link>
          <h1 className="text-sandyBrown font-bolt mt-6 self-center px-12 text-3xl sm:mt-8 sm:p-0 sm:text-4xl sm:font-normal">
            {title}
          </h1>
          {subtitle && (
            <h3 className="text-mediumCarmine my-4 self-center px-12 text-justify text-2xl sm:mt-6 sm:p-0">
              {subtitle}
            </h3>
          )}

          <div className="mt-4 flex flex-col items-center gap-x-12 sm:mt-8 sm:justify-center md:flex-row">
            <div className="mb-4 flex h-fit w-72 flex-col md:mb-0 md:self-start">
              <button className="bg-sandyBrown mb-4 flex h-10 w-72 items-center justify-center rounded-xl">
                Add to cart
              </button>
              <img
                className="bg-steelTeal/10 h-full w-full object-cover"
                src={data.image}
                alt="book-cover"
              />
            </div>

            <div className="flex h-full w-3/4 flex-col md:w-1/3">
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
                        <td className="w-1/4 border-r-2 border-white px-2 font-bold">
                          {label}
                        </td>
                        <td className="p-2">{data[value]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="mt-4 text-justify">{description}</p>

              <div className="flex w-full justify-center">
                <Link to="/it-book-store">
                  <button className="bg-steelTeal/50 visible my-4 mb-4 flex h-10 w-72 items-center justify-center rounded-xl sm:invisible">
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
