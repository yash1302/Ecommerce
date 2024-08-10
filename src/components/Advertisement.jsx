import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { FaFlagUsa } from "react-icons/fa";

const Advertisement = () => {
  return (
    <div>
      <div className="flex bg-black text-white items-center py-1">
        <div className="flex items-center ml-[30rem]">
          <span>Get early access on launches and offers.</span>
          <span className="mx-2">
            <a href="#" className="font-thin underline">
              Sign Up For Texts
            </a>
          </span>
          <span>
            <a href="#" className="font-thin">
              <HiArrowRight />
            </a>
          </span>
        </div>
        <div className="flex items-center gap-2 ml-[22rem]">
            <span><FaFlagUsa/></span>
            <span>India</span>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
