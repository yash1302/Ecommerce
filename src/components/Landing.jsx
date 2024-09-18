import React, { useState, useEffect } from "react";
import { MdCircle } from "react-icons/md";

const Landing = () => {
  const [time, setTime] = useState(5000);

  const images = [
    "https://images.unsplash.com/photo-1726124492901-98e92ae6bd12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhpbmd8ZW58MHwwfDJ8fHwy",
    "https://images.unsplash.com/photo-1649635840101-eba02007e0ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGNsb3RoaW5nJTIwYnJhbmQlMjBsYW5kaW5nJTIwcGFnZSUyMDE0NDAlMjBweHxlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1649635840101-eba02007e0ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGNsb3RoaW5nJTIwYnJhbmQlMjBsYW5kaW5nJTIwcGFnZSUyMDE0NDAlMjBweHxlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1649635840101-eba02007e0ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGNsb3RoaW5nJTIwYnJhbmQlMjBsYW5kaW5nJTIwcGFnZSUyMDE0NDAlMjBweHxlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1649635840101-eba02007e0ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGNsb3RoaW5nJTIwYnJhbmQlMjBsYW5kaW5nJTIwcGFnZSUyMDE0NDAlMjBweHxlbnwwfDB8MHx8fDA%3D",
  ];

  const phoneImages = [
    "https://images.unsplash.com/photo-1725473824377-b1a507db7afc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmclMjBicmFuZHxlbnwwfDF8Mnx8fDI%3D",
    "https://images.unsplash.com/photo-1724414769034-543d68d21436?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRzaGlydCUyMGJyYW5kfGVufDB8MXwyfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1725473824377-b1a507db7afc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmclMjBicmFuZHxlbnwwfDF8Mnx8fDI%3D",
    "https://images.unsplash.com/photo-1725473824377-b1a507db7afc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmclMjBicmFuZHxlbnwwfDF8Mnx8fDI%3D",
    "https://images.unsplash.com/photo-1725473824377-b1a507db7afc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmclMjBicmFuZHxlbnwwfDF8Mnx8fDI%3D",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setImg((prevIndex) => (prevIndex + 1) % images.length);
    }, time);

    return () => clearInterval(interval);
  }, []);
  const [img, setImg] = useState(0);
  const handleClick = (index) => {
    setImg(index);
    setTime(5000);
  };

  return (
    <div className=" mx-auto">
      <img
        className="h-[33rem] w-screen object-cover relative md:hidden"
        src={phoneImages[img]}
        alt=""
      />
      <img
        className="hidden md:block lg:h-screen h-[38rem] w-screen object-cover relative"
        src={images[img]}
        alt=""
      />


      <div className="absolute bottom-[13rem] left-1/2 lg:bottom-[-5rem]  translate-x-[-50%] md:bottom-[8rem]">
        {images.map((btn, index) => (
          <button
            onClick={() => {
              handleClick(index);
            }}
            className={`${
              img === index ? "text-white" : "text-gray-400 opacity-60"
            }`}
          >
            <MdCircle className="h-3" />
          </button>
        ))}
      </div>

      {/* <div className=" text-white flex flex-col items-center justify-center gap-3 ml-[20rem] mt-[5rem] font-display">
        <h1 className="text-5xl text-center tracking-wider font-thin">
          Your Cozy Era
        </h1>
        <p className="w-[20rem] text-center font-thin tracking-wider text-2xl leading-relaxed">
          Get peak comfy-chic <br />
          with new winter essentials.
        </p>
        <button className="py-2 px-[6rem] text-black bg-white font-thin">
          SHOP NOW
        </button>
      </div> */}
    </div>
  );
};

export default Landing;
