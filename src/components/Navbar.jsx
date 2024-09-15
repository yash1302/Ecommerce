import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { PiShoppingCartSimple } from "react-icons/pi";
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

      {/* <div className="flex justify-between items-center my-1 container m-auto font-extralight text-sm">
        <div>
          <ul className="flex">
            <li className="m-2 hover:underline hover:underline-offset-8">
              <a href="#">Women</a>
            </li>
            <li className="m-2 hover:underline hover:underline-offset-8">
              <a href="#">Men</a>
            </li>
            <li className="m-2 hover:underline hover:underline-offset-8">
              <a href="#">About</a>
            </li>
            <li className="m-2 hover:underline hover:underline-offset-8">
              <a href="#">Everworld Stories</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-xl tracking-widest mr-[6rem]">EVERLANE</h1>
        </div>
        <div>
          <ul className="flex">
            <li className="m-2">
              <a href="#">
                <HiMagnifyingGlass />
              </a>
            </li>
            <li className="m-2">
              <a href="#">
                <CiUser />
              </a>
            </li>
            <li className="m-2">
              <a href="#">
                <PiShoppingCartSimple />
              </a>
            </li>
          </ul>
        </div>
      </div> */}
      <hr className="bg-gray-200 " />
    </div>
  );
};

export default Navbar;
