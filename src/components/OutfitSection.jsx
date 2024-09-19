import React from "react";
import Outfits from "./Outfits";
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
import OutfitsMobile from "./OutfitsMobile";

const OutfitSection = () => {
  const outfits = [
    {
      imageLink:
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5ldyUyMGFycml2YWxzJTIwY2xvdGhlc3xlbnwwfDF8MHx8fDA%3D",
      headingName: "New Arrivals",
      btnName: "SHOP THE LATEST",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1609306515474-41187c86b38b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGJlc3QlMjBzZWxsZXJzJTIwY2xvdGhlc3xlbnwwfDF8MHx8fDA%3D",
      headingName: "Best-Sellers",
      btnName: "SHOP YOUR FAVORITES",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1638292858466-4b732d9aef2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGhlJTIwSG9saWRheSUyME91dGZpdHxlbnwwfDF8MHx8fDA%3D",
      headingName: "The Holiday Outfit",
      btnName: "SHOP OCCASION",
    },
  ];

  return (
    <div className="flex flex-col justify-center mt-6 md:mt-[4rem] lg:mt-[6rem] container mx-auto">
      <div className="md:hidden">
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
          className="mySwiper"
        >
          {outfits.map((outfit, index) => (
            <SwiperSlide key={index}>
              <OutfitsMobile
                key={index}
                imageLink={outfit.imageLink}
                headingName={outfit.headingName}
                btnName={outfit.btnName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden md:block lg:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
          className="mySwiper"
        >
          {outfits.map((outfit, index) => (
            <SwiperSlide key={index}>
              <Outfits
                key={index}
                imageLink={outfit.imageLink}
                headingName={outfit.headingName}
                btnName={outfit.btnName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden lg:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
          className="mySwiper"
        >
          {outfits.map((outfit, index) => (
            <SwiperSlide key={index}>
              <Outfits
                key={index}
                imageLink={outfit.imageLink}
                headingName={outfit.headingName}
                btnName={outfit.btnName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </div>
  );
};

export default OutfitSection;
