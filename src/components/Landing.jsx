import React from "react";
import Home from "../assets/Landing.png";

const Landing = () => {
  return (
    <div
      className="w-full h-screen flex items-center"
      style={{ backgroundImage:` URL(${Home})` }}
    >
      {/* <img src={Home} alt="" className='top-0 left-0 w-full h-screen object-cover'/> */}
      <div className=' text-white flex flex-col items-center justify-center gap-3 ml-[12rem] mt-[9rem]' >
            <h1 className='text-4xl text-center tracking-wider'>Your Cozy Era</h1>
            <p className='w-[20rem] text-center font-thin tracking-wide text-xl'>Get peak comfy-chic <br />
            with new winter essentials.</p>
            <button className="py-2 px-[5rem] text-black bg-white">SHOP NOW</button>
        </div>
    </div>
  );
};

export default Landing;
