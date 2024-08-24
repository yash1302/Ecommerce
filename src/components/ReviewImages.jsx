import React from "react";
import { IoStarSharp } from "react-icons/io5";

const ReviewImages = (props) => {
  const { rating, review, brand,type, img } = props.obj;
  const myExample = () => {
    let reviewStars = [];
    for (let i = 0; i < rating; i++) {
      reviewStars.push(<IoStarSharp />);
    }

    return reviewStars;
  };
  return (
    <div className="mt-[4rem] flex container mx-auto justify-center items-center  mb-[3rem] gap-[12rem]">
      <div className="flex flex-col gap-7">
        <p className="font-openSans font-normal mb-4 tracking-wide">
          People Are Talking
        </p>
        <div className="flex flex-col gap-2">
          <p className="flex">{myExample()}</p>
          <p className="text-2xl font-display font-extralight mb-4 tracking-wide w-[25rem]">
            {review}
          </p>
        </div>
        <p className="font-lato font-light text-md tracking-wide">
          {brand},{" "}
          <span className="underline underline-offset-4">
            {type}
          </span>
        </p>
      </div>
      <div>
        <img
          className="h-[80vh] w-[25rem] object-cover rounded-md"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default ReviewImages;
