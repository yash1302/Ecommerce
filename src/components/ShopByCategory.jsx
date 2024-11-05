import React, { useEffect, useState } from "react";
import CategoryImages from "./CategoryImages";
import CategoryImagesMobile from "./CategoryImagesMobile";
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

const ShopByCategory = () => {
  const categoryImages = [
    {
      img: "https://plus.unsplash.com/premium_photo-1683140435505-afb6f1738d11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
      category: "SHIRTS",
    },
    {
      img: "https://images.unsplash.com/photo-1596633298581-75b50adead0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxkZW5pbSUyMGplYW5zJTIwbWVuc3xlbnwwfDF8MHx8fDA%3D",
      category: "DENIM",
    },
    {
      img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFRFRVN8ZW58MHwxfDB8fHww",
      category: "TEES",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1689371953070-10782471db47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fFBBTlRTJTIwc2hvcHBpbmclMjB3ZWJzaXRlfGVufDB8MXwwfHx8MA%3D%3D",
      category: "PANTS",
    },
    {
      img: "https://images.unsplash.com/photo-1660645073790-ea1903b79a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fFNXRUFURVJTfGVufDB8MXwwfHx8MA%3D%3D",
      category: "SWEATERS",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1681433594554-f30dcc3d5335?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8T1VURVJXRUFSfGVufDB8MXwwfHx8MA%3D%3D",
      category: "OUTERWEAR",
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-lg md:text-2xl mt-[4rem] mb-[3rem] font-thin font-display text-center uppercase">
        Shop by Category
      </h1>
      <div className="mt-6 md:hidden">
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper mt-6"
        >
          {categoryImages.map((image, index) => (
            <SwiperSlide>
              <CategoryImagesMobile
                key={index}
                img={image.img}
                category={image.category}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden md:block">
        <div className="flex flex-col justify-center gap-4 mx-auto mt-6">
          <div className="">
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
              {categoryImages.map((image, index) => (
                <SwiperSlide>
                  <CategoryImages
                    key={index}
                    img={image.img}
                    category={image.category}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
