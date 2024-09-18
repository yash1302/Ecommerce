import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Logo from "../assets/Logo.png";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiShoppingBag4Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-3 px-2 max-w-[1440px] m-auto">
        <HiOutlineMenuAlt1 className="text-3xl text-gray-600" />
        <div className="flex items-center gap-2 md:ml-16">
          <img src={Logo} alt="" className="h-5" />
          <p className="text-2xl tracking-wide font-extrabold">EVERLANE</p>
        </div>
        <div className="flex text-2xl text-gray-600 gap-3">
          <IoPersonOutline className="hidden md:block " />
          <HiMagnifyingGlass className="" />
          <IoIosHeartEmpty className="hidden md:block" />
          <RiShoppingBag4Line className="hidden md:block" />
        </div>
      </div>
      <hr className="bg-gray-200 " />
    </div>
  );
};

export default Navbar;
