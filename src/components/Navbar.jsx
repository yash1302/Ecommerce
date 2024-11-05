import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Logo from "../assets/Logo.png";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiShoppingBag4Line } from "react-icons/ri";
import { Link } from "react-router-dom";

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
          <button>
            <Link to={'/login'}>
              <IoPersonOutline className="hidden md:block " />
            </Link>
          </button>
          <button>
            <a href="">
              <HiMagnifyingGlass className="" />
            </a>
          </button>
          <button>
            <a href="">
              {" "}
              <IoIosHeartEmpty className="hidden md:block" />
            </a>
          </button>
          <button className="hover:underline underline-offset-289">
            <a href="">
              <RiShoppingBag4Line className="hidden md:block" />
            </a>
          </button>
        </div>
      </div>
      <hr className="bg-gray-200 " />
    </div>
  );
};

export default Navbar;
