import React, { useState } from "react";

const LoginEmail = ({changePassword,forgotPassword}) => {

  return (
    <div className="flex flex-col w-[27rem] gap-4 mt-[4rem]">
      <input
        type="text"
        placeholder="Email"
        className="py-3 px-2 border-[1px] border-gray-400 rounded-sm focus:border-gray-500 focus:outline-none"
      />
      <input
        type="text"
        placeholder="Password"
        className="py-3 px-2 border-[1px] border-gray-400 rounded-sm focus:border-gray-500 focus:outline-none"
      />
      <div className="flex items-center justify-between">
        <button className="uppercase px-4 py-2 text-white font-semibold bg-black hover:bg-white hover:text-black border-[1px] border-black hover:transition-colors">
          Sign in
        </button>
        <p className="text-md font-light hover:text-red-500 cursor-pointer" onClick={changePassword}>Forgot your password?</p>
      </div>
    </div>
  );
};

export default LoginEmail;
