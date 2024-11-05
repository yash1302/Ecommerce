import { Backdrop } from "@mui/material";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";

const Sidebar = (isOpen, toggleBtn) => {
  return (
    <div>
      <div className="w-3/12  h-[80vh] p-4">
        <div className="flex items-center justify-start gap-4 h-[3rem] bg-white px-4 rounded-xl">
          <div className="text-2xl"><MdOutlineCancel /></div>
          <div className="text-xl">Cancel</div>
        </div>
        {/* <div className="flex items-center justify-start mt-[2rem] gap-4 h-[3rem] bg-white px-4 rounded-xl">
          <CiSearch className="text-2xl"/>
          <input type="search" name="" id="" placeholder="Search" className="w-full h-full outline-none "/>
        </div> */}
        <p className="mt-[2rem] text-xl text-[#8e8e8e] ">Holiday Gifting</p>
      </div>
      New Arrivals Best-Sellers Clothing Tops & Sweaters Pants & Jeans Outerwear
      Shoes & Bags Sale
      {/* <Backdrop open={isOpen}>

        </Backdrop> */}
    </div>
  );
};

export default Sidebar;
