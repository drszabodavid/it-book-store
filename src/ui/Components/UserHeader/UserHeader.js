import React, { useContext } from "react";
import { sandyBrown, mediumCarmine } from "../../../constants/colors";
import { JavaIcon, JavascriptIcon, PythonIcon } from "../Icons";
import { Link } from "react-router-dom";
import { Context } from "../../App";

const UserHeader = () => {
  const logoSize = "h-12 w-12";
  const { setSearchTerm } = useContext(Context);

  return (
    <Link
      to="/"
      onClick={() => {
        setSearchTerm("");
      }}
      className="sticky top-0 flex items-center content-center justify-between w-full p-0 from-sandyBrown to-mediumCarmine h-28 bg-gradient-to-r lg:p-8"
    >
      <div className="flex-row justify-between hidden lg:w-1/5 xl:flex">
        <JavaIcon fill={mediumCarmine} size={logoSize} />
        <JavascriptIcon fill={mediumCarmine} size={logoSize} />
        <PythonIcon fill={mediumCarmine} size={logoSize} />
      </div>

      <div className="flex flex-row justify-center w-full">
        <h1
          className={`font-link from-leanderWeb to-sandyBrown pointer-events-none bg-gradient-to-br bg-clip-text text-4xl font-medium text-transparent sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl`}
        >
          Codebooks
        </h1>
      </div>

      <div className="flex-row justify-between hidden lg:w-1/5 xl:flex">
        <PythonIcon fill={sandyBrown} size={logoSize} />
        <JavascriptIcon fill={sandyBrown} size={logoSize} />
        <JavaIcon fill={sandyBrown} size={logoSize} />
      </div>
    </Link>
  );
};

export default UserHeader;
