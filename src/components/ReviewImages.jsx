import React from "react";
import { IoStarSharp } from "react-icons/io5";


const ReviewImages = () => {
  return (
    <div className="flex container mx-auto justify-center items-center  mb-[3rem] gap-[12rem]">
      <div className="flex flex-col gap-7">
        <p className="font-openSans font-normal mb-4 tracking-wide">
          People Are Talking
        </p>
        <div className="flex flex-col gap-2">
          <p className="flex">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </p>
          <p className="text-2xl font-display font-extralight mb-4 tracking-wide">
            “Love this shirt! Fits perfectly and <br /> the fabric is thick
            without <br />
            being stiff.”
          </p>
        </div>
        <p className="font-lato font-light text-md tracking-wide">-- JonSnSF, <span className="underline underline-offset-4">The Heavyweight Overshirt</span></p>
      </div>
      <div>
        <img
          className="h-[40rem] w-[28rem] object-fill"
          src="https://images.unsplash.com/photo-1697425603497-878be43708bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNsb3RoaW5nJTIwYnJhbmR8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default ReviewImages;
