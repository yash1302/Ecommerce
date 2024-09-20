import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { BsRecycle } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const BenefitsImages = (props) => {
    const {icon ,text} = props;
  return (
    <div className="ml-8 my-4 flex items-center gap-3">
      <div className=" border-2 w-[3.5rem] text-3xl flex items-center justify-center h-[3.5rem] rounded-full">
         {icon}
      </div>
      <div className="text-sm"> - {text}</div>
    </div>
  );
};

export default BenefitsImages;
