import React, { useState } from "react";
import ReviewImages from "./ReviewImages";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  FreeMode,
  Pagination,
  Mousewheel,
  Keyboard,
  Navigation,
} from "swiper/modules";
import ReviewImagesMobile from "./ReviewImagesMobile";

const Review = () => {
  const reviews = [
    {
      rating: "5",
      review: `“Love this shirt! Fits perfectly and the fabric is thick without being stiff.”`,
      brand: "-- JonSnSF",
      type: "The Heavyweight Overshirt",
      img: "https://images.unsplash.com/photo-1697425603497-878be43708bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNsb3RoaW5nJTIwYnJhbmR8ZW58MHx8MHx8fDA%3D",
    },
    {
      rating: "4",
      review: `“The jacket is stylish and keeps me warm. It runs a bit large, so I recommend sizing down.”`,
      brand: "-- AlexGreen",
      type: "The Classic Denim Jacket",
      img: "https://plus.unsplash.com/premium_photo-1669704099144-ea82baa28d68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmclMjBtb2RlbHN8ZW58MHwxfDB8fHww",
    },
    {
      rating: "5",
      review: `“These jeans are my new favorite! The fit is spot on, and they’re super comfortable.”`,
      brand: "-- SarahBlues",
      type: "Slim Fit Jeans",
      img: "https://images.unsplash.com/photo-1651633773397-e393d2f218c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoaW5nJTIwbW9kZWxzfGVufDB8MXwwfHx8MA%3D%3D",
    },
    {
      rating: "3",
      review: `“The sweater is cozy, but the color wasn’t quite what I expected. Still, it’s nice for casual wear.”`,
      brand: "-- EmmaWarm",
      type: "Cozy Knit Sweater",
      img: "https://images.unsplash.com/photo-1560884392-a636e0722bc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNsb3RoaW5nJTIwbW9kZWxzfGVufDB8MXwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="lg:h-screen h-full mt-6 md:mt-[4rem] lg:mt-[6rem] container mx-auto">
      <div className="md:hidden">
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
          className="mySwiper ml-4"
        >
          {reviews.map((card, index) => (
            <SwiperSlide key={index}>
              <ReviewImagesMobile obj={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden md:block">

        <Swiper
          cssMode={true}
          pagination={{
            dynamicBullets: true,
          }}
          spaceBetween={10}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
          className="mySwiper mx-4"
        >
          {reviews.map((card, index) => (
            <SwiperSlide key={index}>
              <ReviewImages obj={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <hr class="w-[10rem] md:w-max container mx-auto h-px bg-gray-800 border-0 dark:bg-gray-700 mt-[2rem] md:mt-0" />
    </div>
  );
};

export default Review;
