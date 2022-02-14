import React from "react";
import { sandyBrown, mediumCarmine } from "../../../constants/colors";
import { JavaIcon, JavascriptIcon, PythonIcon } from "../Icons";
import { Link } from "react-router-dom";

const UserHeader = () => {
  const logoSize = "h-12 w-12";

  return (
    <Link
      to="/"
      state={{ shouldRefresh: true }}
      className="sticky top-0 flex items-center content-center justify-between w-full p-0 from-sandyBrown to-mediumCarmine h-28 bg-gradient-to-r lg:p-8"
    >
      <div className="flex flex-row justify-between invisible lg:visible lg:w-1/5">
        <JavaIcon fill={mediumCarmine} size={logoSize} />
        <JavascriptIcon fill={mediumCarmine} size={logoSize} />
        <PythonIcon fill={mediumCarmine} size={logoSize} />
      </div>

      <div className="flex flex-row justify-start w-full lg:justify-center">
        <h1
          className={`font-link from-leanderWeb to-sandyBrown pointer-events-none bg-gradient-to-br bg-clip-text text-5xl font-medium text-transparent lg:text-8xl`}
        >
          Codebooks
        </h1>
      </div>

      <div className="flex flex-row justify-between invisible lg:visible lg:w-1/5">
        <PythonIcon fill={sandyBrown} size={logoSize} />
        <JavascriptIcon fill={sandyBrown} size={logoSize} />
        <JavaIcon fill={sandyBrown} size={logoSize} />
      </div>
    </Link>
  );
};

export default UserHeader;
