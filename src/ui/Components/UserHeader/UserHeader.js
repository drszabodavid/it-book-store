import React from "react";
import {
  sandyBrown,
  mediumCarmine,
  gradientColorStyle,
} from "../../../constants/colors";
import { JavaIcon, JavascriptIcon, PythonIcon } from "../Icons";
import { Link } from "react-router-dom";

const UserHeader = () => {
  const logoSize = "h-12 w-12";

  return (
    <Link
      to="/"
      className="from-sandyBrown to-mediumCarmine sticky top-0 flex h-28 w-full content-center items-center justify-between bg-gradient-to-r p-0 lg:p-8"
    >
      <div className="invisible flex flex-row justify-between lg:visible lg:w-1/5">
        <JavaIcon fill={mediumCarmine} size={logoSize} />
        <JavascriptIcon fill={mediumCarmine} size={logoSize} />
        <PythonIcon fill={mediumCarmine} size={logoSize} />
      </div>

      <div className="flex w-full flex-row justify-start lg:justify-center">
        <h1
          className={`font-link text-5xl font-medium lg:text-8xl ${gradientColorStyle} pointer-events-none`}
        >
          Codebooks
        </h1>
      </div>

      <div className="invisible flex flex-row justify-between lg:visible lg:w-1/5">
        <PythonIcon fill={sandyBrown} size={logoSize} />
        <JavascriptIcon fill={sandyBrown} size={logoSize} />
        <JavaIcon fill={sandyBrown} size={logoSize} />
      </div>
    </Link>
  );
};

export default UserHeader;
