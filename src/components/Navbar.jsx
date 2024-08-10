import React from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { PiShoppingCartSimple } from "react-icons/pi";


const Navbar = () => {
  return (
    <div><div className="flex justify-between items-center ml-12 mr-16 my-2">
    <div>
      <ul className="flex">
        <li className="m-2 hover:border-b-4">
          <a href="#">Women</a>
        </li>
        <li className="m-2">
          <a href="#">Men</a>
        </li>
        <li className="m-2">
          <a href="#">About</a>
        </li>
        <li className="m-2">
          <a href="#">Everworld Stories</a>
        </li>
      </ul>
    </div>
    <div>
      <h1 className="font-semibold tracking-widest mr-14">EVERLANE</h1>
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
  </div>
  <hr className="bg-gray-200 "/></div>
  )
}

export default Navbar