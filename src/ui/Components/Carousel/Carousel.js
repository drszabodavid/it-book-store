import React, { useState, useEffect } from "react";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className="bg-shadow flex w-3/4 self-center px-8">
      <div className="relative flex w-full">
        <div className="flex h-full items-center">
          <button
            onClick={prev}
            className="hover:bg-sandyBrown/70 active:bg-sandyBrown/100 hover:ring-sandyBrown/30 absolute -left-14 z-10 h-12 w-12 rounded-full border bg-white hover:outline-none"
          >
            &lt;
          </button>
        </div>
        <div className="h-full w-full overflow-hidden">
          <div
            className="flex w-full flex-shrink-0 flex-grow-0 transition-all duration-300"
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {children}
          </div>
        </div>
        <div className="flex h-full items-center">
          <button
            onClick={next}
            className="hover:bg-sandyBrown/70 active:bg-sandyBrown/100 hover:ring-sandyBrown/30 absolute -right-14 z-10 h-12 w-12 rounded-full border bg-white hover:outline-none"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
