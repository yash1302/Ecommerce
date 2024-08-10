import React from "react";

const CategoryImages = (props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={props.img} alt="" className="h-[18rem]" />
      <a href=""> <p className="underline underline-offset-4 mt-4 tracking-wide "> {props.category}</p></a>
    </div>
  );
};

export default CategoryImages;
