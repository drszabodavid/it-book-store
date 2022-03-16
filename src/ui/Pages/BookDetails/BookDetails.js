import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../../api/useFetch";
import { bookDetailsUrl } from "../../../constants/api";
import { ErrorHandlingComponent } from "../../Components/APIComponents";

const BookDetails = () => {
  const { bookId } = useParams();
  const url = `${bookDetailsUrl}/${bookId}`;
  const { data, isLoading, error } = useFetch(url);
  const { title, subtitle, desc: description, pdf } = { ...data };
  const rowLabels = [
    "Price",
    "Rating",
    "Authors",
    "Publisher",
    "Year",
    "Pages",
  ];

  return (
    <div className="flex flex-col w-full bg-leanderWeb h-full/header">
      {(isLoading || error) && (
        <div className="flex items-center justify-center h-full">
          <ErrorHandlingComponent isLoading={isLoading} error={error} />
        </div>
      )}
      {!isLoading && data && (
        <>
          <Link to="/">
            <button className="absolute left-0 w-16 h-10 m-4 border-2 text-sandyBrown hover:bg-sandyBrown/50 border-sandyBrown bg-sandyBrown/10 rounded-2xl hover:text-white">
              back
            </button>
          </Link>
          <h1 className="self-center mt-8 text-4xl text-justify text-sandyBrown">
            {title}
          </h1>
          {subtitle && (
            <h3 className="self-center mt-6 text-2xl text-mediumCarmine">
              {subtitle}
            </h3>
          )}

          <div className="flex flex-row justify-center mt-8 gap-x-12">
            <div className="flex flex-col h-fit w-72">
              <img
                className="object-cover w-full h-full bg-steelTeal/10"
                src={data.image}
                alt="book-cover"
              />
              <button className="flex items-center justify-center h-10 my-4 bg-sandyBrown w-72 rounded-xl">
                Add to cart
              </button>
              <button className="flex items-center justify-center h-10 bg-steelTeal/70 w-72 rounded-xl">
                Preview
              </button>
            </div>

            <div className="flex flex-col w-1/3 h-full">
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
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookDetails;
