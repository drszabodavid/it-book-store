import React, { useState } from "react";
import { Link } from "react-router-dom";
import { placeholderImage } from "../../../constants/images";

const BookCard = ({ book, isFeatured }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { title, subtitle, image, price, isbn13 } = { ...book };
  const toLink = isFeatured ? `featured/${isbn13}` : `books/${isbn13}`;

  return (
    <div className="flex p-4 min-w-64 max-w-64">
      <Link
        to={toLink}
        className="block bg-white rounded-lg shadow-lg hover:shadow-sandyBrown"
      >
        <div className="w-56 m-auto overflow-hidden h-52">
          <img
            className="object-cover w-full h-full mt-2 transition duration-300 ease-in-out hover:scale-150"
            src={imageLoaded ? image : placeholderImage}
            alt="book-cover"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="p-4">
          {isFeatured && (
            <span className="inline-block px-2 py-1 text-xs font-semibold leading-none tracking-wide text-orange-800 uppercase bg-orange-200 rounded-full">
              Featured
            </span>
          )}

          <h2
            style={{ lineClamp: 2 }}
            className="w-full h-12 mt-3 mb-2 overflow-hidden font-bold line-clamp-2"
          >
            {title}
          </h2>
          <p className="h-10 text-sm line-clamp-2 ">{subtitle}</p>
          <div className="flex items-center mt-3">
            <span className="text-xl font-bold">{price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
