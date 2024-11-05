import React from 'react'

const LoginWithEmail = () => {
  return (
    <div>
    <Navbar />
    <p className="font-semibold text-2xl tracking-wide text-center my-[2rem]">
      My Account
    </p>
    <div className="container px-[8rem] mx-auto flex justify-center items-center gap-[2rem]">
      <div className="border-2 h-[35rem] w-1/2 flex flex-col gap-[1.5rem] items-center px-4 justify-center">
        <p className="font-bold text-3xl tracking-wider">Login</p>
        <div className="grid grid-cols-3 gap-2 items-center justify-center w-full">
          <div className="py-3 border-2 col-span-1 rounded-lg text-center">+91</div>
          <input type="text" placeholder="Phone number" className="col-span-2 py-3 px-2 border-2 rounded-lg"/>
        </div>
        <button className="w-full py-3 text-white font-semibold bg-black hover:bg-white hover:text-black border-[1px] border-black hover:transition-colors">GET OTP</button>
        <div className="flex gap-4">
          <hr className="ml-0 mr-0 text-gray-400 border-[1px] mx-[0.5rem] my-auto w-[8rem]"/>
          <p>or continue with</p>
          <hr className="ml-0 mr-0 text-gray-400 border-[1px] mx-[0.5rem] my-auto w-[8rem]"/>
        </div>
        <button className="px-[4rem] rounded-lg py-3 font-semibold border-2">Login with Email/Password</button>
      </div>
      <div className="border-2 h-[35rem] w-1/2 px-[2rem]">
        <p className="uppercase font-bold text-sm mt-[3rem]">new customer?</p>
        <p className="font-light text-gray-500 mt-[2rem]">
          Registering for this site allows you to access your order status and
          history. We’ll get a new account set up for you in no time. For this
          will only ask you for information necessary to make the purchase
          process faster and easier
        </p>
      </div>
    </div>
  </div>
  )
}

export default LoginWithEmail