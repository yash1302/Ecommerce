import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import LoginPhone from "../components/LoginPhone";
import LoginEmail from "../components/LoginEmail";
import ResetPassword from "../components/ResetPassword";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginType, setLoginType] = useState(0);
  const [forgotPassword, setForgotPassword] = useState(false);

  const setPasswordTrue = () => {
    setForgotPassword(true);
  };
  const setPasswordFalse = () => {
    setForgotPassword(false);
  };

  const handleLoginType = () => {
    setLoginType(loginType === 0 ? 1 : 0);
  };

  console.log(forgotPassword);
  return (
    <div>
      <Navbar />
      <p className="font-semibold text-2xl tracking-wide text-center my-[2rem]">
        My Account
      </p>
      <div className="container px-[8rem] mx-auto flex justify-center items-center gap-[2rem]">
        {forgotPassword ? (
          <ResetPassword setPasswordFalse={setPasswordFalse} />
        ) : (
          <div className="border-2 h-[35rem] w-1/2 flex flex-col gap-[1.5rem] items-center px-4 justify-center">
            {loginType === 0 ? (
              <LoginPhone />
            ) : (
              <LoginEmail
                changePassword={setPasswordTrue}
                forgotPasswordState={forgotPassword}
                setPasswordFalse={setPasswordFalse}
              />
            )}

            <div className="flex gap-4">
              <hr className="ml-0 mr-0 text-gray-400 border-[1px] mx-[0.5rem] my-auto w-[8rem]" />
              <p>or continue with</p>
              <hr className="ml-0 mr-0 text-gray-400 border-[1px] mx-[0.5rem] my-auto w-[8rem]" />
            </div>
            <button
              className="px-[4rem] rounded-lg py-3 font-semibold border-2"
              onClick={handleLoginType}
            >
              {loginType === 0
                ? "Login with Email/Password"
                : "Login/Register with phone number"}
            </button>
          </div>
        )}

        <div className="border-2 h-[35rem] w-1/2 px-[2rem]">
          <p className="uppercase font-bold text-sm mt-[3rem]">new customer?</p>
          <p className="font-light text-gray-500 mt-[2rem]">
            Registering for this site allows you to access your order status and
            history. We’ll get a new account set up for you in no time. For this
            will only ask you for information necessary to make the purchase
            process faster and easier
          </p>
          <Link to={'/signup'}>
            <button
              className={`${
                loginType === 0 ? `hidden` : `block`
              } w-full mt-4 py-2 text-white font-semibold bg-black hover:bg-white hover:text-black border-[1px] border-black hover:transition-colors`}
            >
              create account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
