import React from "react";
import { BookCard, Carousel, FeaturedText } from "..";

const FeaturedCarousel = ({ books }) => {
  return (
    <>
      <FeaturedText />
      <Carousel>
        {books.map((book, index) => (
          <BookCard book={book} isFeatured />
        ))}
      </Carousel>
    </>
  );
};

export default FeaturedCarousel;
