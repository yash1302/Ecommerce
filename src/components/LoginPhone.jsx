import React from "react";

const LoginPhone = () => {
  return (
    <div className="flex flex-col gap-[1.5rem] items-center px-4 justify-center">
      <p className="font-bold text-3xl tracking-wider">Login/Singup</p>
      <div className="grid grid-cols-3 gap-2 items-center justify-center w-[25rem]">
        <div className="py-3 border-2 col-span-1 rounded-lg text-center">
          +91
        </div>
        <input
          type="text"
          placeholder="Phone number"
          className="col-span-2 py-3 px-2 border-2 rounded-lg"
        />
      </div>
      <button className="w-full py-3 text-white font-semibold bg-black hover:bg-white hover:text-black border-[1px] border-black hover:transition-colors">
        GET OTP
      </button>
    </div>
  );
};

export default LoginPhone;
