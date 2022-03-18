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
      to="/it-book-store"
      onClick={() => setSearchTerm("")}
      className="from-sandyBrown to-mediumCarmine sticky top-0 flex h-28 w-full content-center items-center justify-between bg-gradient-to-r p-0 lg:p-8"
    >
      <div className="hidden flex-row justify-between lg:w-1/5 xl:flex">
        <JavaIcon fill={mediumCarmine} size={logoSize} />
        <JavascriptIcon fill={mediumCarmine} size={logoSize} />
        <PythonIcon fill={mediumCarmine} size={logoSize} />
      </div>

      <div className="flex w-full flex-row justify-center">
        <h1
          className={`font-link from-leanderWeb to-sandyBrown pointer-events-none bg-gradient-to-br bg-clip-text text-4xl font-medium text-transparent sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl`}
        >
          Codebooks
        </h1>
      </div>

      <div className="hidden flex-row justify-between lg:w-1/5 xl:flex">
        <PythonIcon fill={sandyBrown} size={logoSize} />
        <JavascriptIcon fill={sandyBrown} size={logoSize} />
        <JavaIcon fill={sandyBrown} size={logoSize} />
      </div>
    </Link>
  );
};

export default UserHeader;
