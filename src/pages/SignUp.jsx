import React from "react";
import Navbar from "../components/Navbar";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center flex-col h-screen mt-[8rem] gap-10">
        <p className="text-2xl font-semibold tracking-wider">
          Create an Account
        </p>
        <form action="" className="grid grid-cols-1 gap-4 w-2/5">
          <input
            type="text"
            placeholder="First Name"
            className="py-3 px-2 border-[1px] border-gray-400 rounded-sm focus:border-gray-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="py-3 px-2 border-[1px] border-gray-400 rounded-sm focus:border-gray-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Email"
            className="py-3 px-2 border-[1px] rounded-sm border-gray-400 focus:border-gray-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Password"
            className="py-3 px-2 border-[1px] rounded-sm border-gray-400 focus:border-gray-500 focus:outline-none"
          />
        </form>
        <button className=" bg-black text-white py-2 px-12">Submit</button>
      </div>
    </>
  );
};

export default SignUp;
