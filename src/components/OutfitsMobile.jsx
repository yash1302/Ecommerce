import React from "react";

const OutfitsMobile = (props) => {
  return (
    <div className="relative">
      <img
        className=" w-screen h-[30rem] object-cover brightness-75"
        src={props.imageLink}
        alt=""
      />
      <div className="text-center absolute top-[17rem] left-[9rem] text-white flex flex-col justify-center items-center">
        <h1 className="font-display font-thin tracking-widest text-xl text-center">
          {props.headingName}
        </h1>
        <button className="text-center bg-white text-black px-2 py-1 text-xs mt-4 font-display font-thin tracking-wider">
          {props.btnName}
        </button>
      </div>
    </div>
  );
};

export default OutfitsMobile;
