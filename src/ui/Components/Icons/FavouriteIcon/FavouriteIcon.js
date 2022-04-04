import React from "react";
import clsx from "clsx";

const FavouriteIcon = ({ size, fill, extraStyle, isSelected }) => {
  const classes = clsx(size, extraStyle, "select-none");

  return (
    <svg
      className={classes}
      fill={fill}
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={isSelected ? fill : "none"}
        stroke={fill}
        stroke-width="1.5"
        d="M1,8.4 C1,4 4.5,3 6.5,3 C9,3 11,5 12,6.5 C13,5 15,3 17.5,3 C19.5,3 23,4 23,8.4 C23,15 12,21 12,21 C12,21 1,15 1,8.4 Z"
      ></path>
    </svg>
  );
};

export default FavouriteIcon;