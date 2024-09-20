import React, { useState } from "react";
import Photos from "./Photos";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  FreeMode,
  Pagination,
  Mousewheel,
  Keyboard,
  Navigation,
  EffectCards,
} from "swiper/modules";

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    "https://images.unsplash.com/photo-1527718641255-324f8e2d0421?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VEVFU3xlbnwwfDF8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1512168029465-4efe057c7b9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRFRVN8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1527181467037-80564ba4ac51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFRFRVN8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNsb3RoaW5nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNsb3RoaW5nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1434510423563-c7e99bbc5bbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwbWVuc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1552168212-9ceb61083ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG1vZGVsJTIwbWVuc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1564628175829-afb5078c0779?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG1vZGVsJTIwbWVuc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG1vZGVsJTIwbWVuc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxtb2RlbCUyMG1lbnN8ZW58MHx8MHx8fDA%3D",
  ];

  const handleNext = () => {
    setCurrentIndex((previousIndex) => (previousIndex + 1) % photos.length);
    console.log("clicked");
  };

  const handlePrev = () => {
    setCurrentIndex(
      (previousIndex) => (previousIndex - 1 + photos.length) % photos.length
    );
    console.log("clicked");
  };

  const displayPhotos = () => {
    const secondPhoto = (currentIndex + 1) % photos.length;
    const thirdPhoto = (currentIndex + 2) % photos.length;
    const fourthPhoto = (currentIndex + 3) % photos.length;
    const fifthPhoto = (currentIndex + 4) % photos.length;

    return [
      photos[currentIndex],
      photos[secondPhoto],
      photos[thirdPhoto],
      photos[fourthPhoto],
      photos[fifthPhoto],
    ];
  };

  return (
    <div>
      <div className="mt-6 md:mt-[4rem] lg:mt-[6rem] container mx-auto ">
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl lg:text-3xl font-light font-display mb-4 tracking-wide">
            Everlane On You
          </p>
          <p className="text-center font-openSans font-thin tracking-wider mb-2 w-[20rem] md:w-full">
            Share your latest look with #EverlaneOnYou for a chance to be
            featured.
          </p>
          <button className="text-sm btn btn-primary border-solid-gray-50  border-2 p-2 rounded-full hover:bg-black hover:text-white font-openSans font-thin tracking-wider mb-4">
            Add Your Photo
          </button>
        </div>
        <div className="md:hidden">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper w-2/3 mx-auto"
          >
            {photos.map((photo, index) => (
              <SwiperSlide>
                <Photos key={index} src={photo} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden md:block lg:hidden">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            cssMode={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
            className="mySwiper mx-4"
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <Photos key={index} src={photo} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden lg:block">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            cssMode={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
            className="mySwiper mx-4"
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <Photos key={index} src={photo} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <hr class="hidden md:block container mx-auto h-px bg-gray-800 border-0 dark:bg-gray-700" /> */}
    </div>
  );
};

export default PhotoGallery;
