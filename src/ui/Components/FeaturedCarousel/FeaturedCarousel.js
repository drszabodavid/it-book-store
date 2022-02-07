import React from "react";
import { BookCard, Carousel, FeaturedText } from "..";

const FeaturedCarousel = ({ books }) => {
  return (
    <Carousel>
      {books.map((book) => (
        <BookCard key={book.isbn13} book={book} isFeatured />
      ))}
    </Carousel>
  );
};

export default FeaturedCarousel;
