import React from "react";
import clsx from "clsx";

const PlusIcon = ({ size, fill, extraStyle }) => {
  const classes = clsx(size, extraStyle, "select-none");

  return (
    <svg
      className={classes}
      stroke={fill}
      fill={fill}
      strokeWidth={0}
      viewBox="0 0 1024 1024"
    >
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z" />
    </svg>
  );
};

export default PlusIcon;