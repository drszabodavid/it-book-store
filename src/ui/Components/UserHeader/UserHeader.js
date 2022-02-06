import React from "react";
import {
  sandyBrown,
  mediumCarmine,
  gradientColorStyle,
} from "../../../constants/colors";
import { JavaIcon, JavascriptIcon, PythonIcon } from "../Icons";

const UserHeader = () => {
  const logoSize = "h-12 w-12";

  return (
    <div className="from-sandyBrown to-mediumCarmine flex h-28 w-full content-center items-center justify-between bg-gradient-to-r p-8">
      <div className="flex w-1/5 flex-row justify-between">
        <JavaIcon fill={mediumCarmine} size={logoSize} />
        <JavascriptIcon fill={mediumCarmine} size={logoSize} />
        <PythonIcon fill={mediumCarmine} size={logoSize} />
      </div>

      <div className="flex w-full flex-row justify-center">
        <h1 className={`font-link text-8xl font-medium ${gradientColorStyle}`}>
          Coodbooks
        </h1>
      </div>

      <div className="flex w-1/5 flex-row justify-between">
        <PythonIcon fill={sandyBrown} size={logoSize} />
        <JavascriptIcon fill={sandyBrown} size={logoSize} />
        <JavaIcon fill={sandyBrown} size={logoSize} />
      </div>
    </div>
  );
};

export default UserHeader;
