import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" mt-[6rem] bg-[#F5F4F4] pb-[2rem] ">
      <div className="grid grid-cols-11 px-[3rem] container mx-auto pt-[3rem] ">
        <div className="flex flex-col gap-2 col-span-2 text-[#737373] ">
          <a
            href=""
            className="font-bold tracking-wide text-lg mb-[1rem] text-black"
          >
            Account
          </a>
          <a href="">Log In</a>
          <a href="">Sign Up</a>
          <a href="">Redeem a Gift Card</a>
        </div>
        <div className="flex flex-col gap-2 col-span-2 text-[#737373]">
          <a
            href=""
            className="font-bold tracking-wide text-lg mb-[1rem] text-black"
          >
            Company
          </a>
          <a href="">About</a>
          <a href="">FAQs</a>
          <a href="">Contact Us</a>
          <a href="">Store Locator</a>
          <a href="">Blogs</a>
        </div>
        <div className="flex flex-col gap-2 col-span-2 text-[#737373]">
          <a
            href=""
            className="font-bold tracking-wide text-lg mb-[1rem] text-black"
          >
            Get Help
          </a>
          <a href="">Help Center</a>
          <a href="">Return Policy</a>
          <a href="">Shipping Info</a>
          <a href="">Bulk Orders</a>
        </div>
        <div className="flex flex-col gap-2 col-span-2 text-[#737373]">
          <a
            href=""
            className="font-bold tracking-wide text-lg mb-[1rem] text-black"
          >
            Connect
          </a>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Twitter</a>
          <a href="">Affiliates</a>
        </div>
        <div className="flex justify-between items-center col-span-3 w-full h-[3.2rem] border-2 pl-2 bg-white">
          <input
            type="email"
            className="h-full w-full text-xl outline-none"
            placeholder="Email Address"
          />

          <button className="text-2xl h-full w-[6rem] bg-black px-2 py-2 text-white flex items-center justify-center">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
