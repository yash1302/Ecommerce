import React from "react";

const CategoryImagesMobile = (props) => {
  
  return (
    <div className="flex flex-col items-center">
      <img
        src={props.img}
        alt=""
        className="rounded-md h-[5rem] w-[5rem] object-cover"
      />
      <p className="text-sm  mt-3 p-0">{props.category}</p>
    </div>
  );
};

export default CategoryImagesMobile;
