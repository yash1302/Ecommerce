import React from "react";
import ReviewImages from "./ReviewImages";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";

const Review = () => {
  return (
    <div className="h-screen">
      <div className="container mx-auto flex items-center justify-center">
        <button className="mb-[2rem]">
          <FaLessThan />
        </button>
        <ReviewImages />

        <button className="mb-[2rem]">
          <FaGreaterThan />
        </button>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
};

export default Review;
