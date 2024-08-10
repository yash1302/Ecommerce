import React from "react";

const Outfits = (props) => {
  return (
    <div className="relative">
      <img
        className="h-[35rem] w-[25rem] brightness-50"
        src={props.imageLink}
        alt=""
      />
      <div className="absolute top-[8rem] left-[8rem] text-white flex flex-col justify-center items-center">
        <h1 className="font-semibold tracking-wide text-xl">{props.headingName}</h1>
        <button className="bg-white text-black px-3 py-2 text-xs mt-4">{props.btnName}</button>
      </div>
    </div>
  );
};

export default Outfits;
