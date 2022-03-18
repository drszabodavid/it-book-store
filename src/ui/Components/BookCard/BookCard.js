import React, { useState } from "react";
import { Link } from "react-router-dom";
import { placeholderImage } from "../../../constants/images";

const BookCard = ({ book, isFeatured }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { title, subtitle, image, price, isbn13 } = { ...book };
  const toLink = isFeatured
    ? `/featured/${isbn13}`
    : `/books/${isbn13}`;

  return (
    <div className="min-w-64 max-w-64 flex p-4">
      <Link
        to={toLink}
        className="hover:shadow-sandyBrown block rounded-lg bg-white shadow-lg"
      >
        <div className="m-auto h-52 w-56 overflow-hidden">
          <img
            className="mt-2 h-full w-full object-cover transition duration-300 ease-in-out hover:scale-150"
            src={imageLoaded ? image : placeholderImage}
            alt="book-cover"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="p-4">
          {isFeatured && (
            <span className="inline-block rounded-full bg-orange-200 px-2 py-1 text-xs font-semibold uppercase leading-none tracking-wide text-orange-800">
              Featured
            </span>
          )}

          <h2
            style={{ lineClamp: 2 }}
            className="line-clamp-2 mt-3 mb-2 h-12 w-full overflow-hidden font-bold"
          >
            {title}
          </h2>
          <p className="line-clamp-2 h-10 text-sm ">{subtitle}</p>
          <div className="mt-3 flex items-center">
            <span className="text-xl font-bold">{price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
