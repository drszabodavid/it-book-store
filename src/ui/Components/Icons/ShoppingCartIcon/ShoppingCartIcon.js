import React from "react";
import clsx from "clsx";

const ShoppingCartIcon = ({ size, extraStyle }) => {
  return (
    <div className="fixed bottom-0 w-full">
      <button className="absolute bottom-0 right-0 px-1 py-4 mr-3 text-gray-800 transition duration-150 ease-in-out border-2 border-transparent rounded-full hover:text-gray-400 focus:text-gray-500 focus:outline-none">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
        <span class="absolute inset-0 -mr-6 object-right-top">
          <div class="bg-mediumCarmine inline-flex items-center rounded-full border-2 border-white px-1.5 py-0.5 text-xs font-semibold leading-4 text-white">
            0
          </div>
        </span>
      </button>
    </div>
  );
};

export default ShoppingCartIcon;
