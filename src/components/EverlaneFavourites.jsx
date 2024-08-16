import React, { useEffect, useState } from "react";
import EverlaneFavouritesImages from "./EverlaneFavouritesImages";

const EverlaneFavourites = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageArr,setImageArr] = useState([1,2,3])
  const images = [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoaW5nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoaW5nfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1679056835084-7f21e64a3402?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3RoaW5nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoaW5nfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1664202526475-8f43ee70166d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNsb3RoaW5nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1541840031508-326b77c9a17e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNsb3RoaW5nfGVufDB8fDB8fHww",
  ];




// const images = [1,2,3,4,5,6,7,8]
  //   console.log(currentIndex);
  //   const handleNext = () => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   };

  //   const handlePrev = () => {
  //     setCurrentIndex(
  //       (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //     );
  //   };

  //   if (currentIndex > images.length - 4) {
  //     setCurrentIndex(0);
  //   }

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setImageArr(oldArray => [...oldArray,])
    const shiftImage = [
        ...imageArr.slice(1)
    ]
    setImageArr(shiftImage)
    setCurrentIndex((prevIndex) => (prevIndex + 1 ) % images.length);
  };


  useEffect(() => {
    console.log(imageArr)

    if (currentIndex >= images.length - 3) {
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  return (
    <div className="mt-2 mx-auto relative container flex items-center justify-center gap-4">
      <button className="w-6 h-6" onClick={handlePrev}>
        &lt;
      </button>
      <div className="flex gap-2 items-center justify-center">
        {images.slice(currentIndex, currentIndex + 4).map((card, index) => (
          <EverlaneFavouritesImages key={index} img={card} index={index} />
        ))}
      </div>

      <button className="w-6 h-6 " onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default EverlaneFavourites;
