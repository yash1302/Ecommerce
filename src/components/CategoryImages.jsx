import React from "react";

const CategoryImages = (props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={props.img} alt="" className="w-[25rem] h-[25rem] object-cover" />
      <a href=""> <p className="underline underline-offset-4 mt-4 tracking-wide "> {props.category}</p></a>
    </div>
  );
};

export default CategoryImages;
