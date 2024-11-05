import React, { useState, useEffect } from "react";
import { MdCircle } from "react-icons/md";

const Landing = () => {
  const [time, setTime] = useState(5000);

  const images = [
    "https://images.unsplash.com/uploads/1413387158190559d80f7/6108b580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHwwfDB8fHwy",
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
    <div className="mx-auto relative">
      <img
        className="h-[33rem] w-screen object-cover relative md:hidden"
        src={phoneImages[img]}
        alt=""
      />
      <div className="hidden md:block h-[80vh] w-[90vw] mx-auto">
        <img
          className="w-full h-full object-contain"
          src={images[img]}
          alt=""
        />
      </div>

      <div className="absolute top-[35rem] left-1/2 lg:bottom-[-10rem] translate-x-[-50%] md:bottom-[10rem]">
        {images.map((btn, index) => (
          <button
            onClick={() => {
              handleClick(index);
            }}
            className={`${
              img === index ? "text-white" : "text-black opacity-60"
            }`}
          >
            <MdCircle className="h-3" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Landing;
