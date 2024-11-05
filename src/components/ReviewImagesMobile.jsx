import React, { useState,useEffect } from "react";
import { IoStarSharp } from "react-icons/io5";

const ReviewImagesMobile = (props) => {
  const { rating, review, brand, type, img } = props.obj;
  const [reviewStars, setReviewStars] = useState([]);
  useEffect(() => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<IoStarSharp key={i} />);
    }
    setReviewStars(stars);
  }, [rating]);
  console.log(first)
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="flex mb-2 text-yellow-600">{reviewStars}</p>
        <p className="w-[15rem] text-sm font-display font-extralight mb-4 tracking-wide">
          {review}
        </p>
        <img
          src={img}
          alt=""
          className="rounded-full h-[5rem] w-[5rem] object-cover"
        />
      </div>
    </div>
  );
};

export default ReviewImagesMobile;
