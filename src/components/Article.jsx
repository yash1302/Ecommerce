import React from "react";
import ArticleImage from "./ArticleImage";
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
import ArticleImageMobile from "./ArticleImageMobile";

const Article = () => {
  const articles = [
    {
      heading: "Our Holiday Gift Picks",
      img: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoZXN8ZW58MHwxfDB8fHww",
      title: "The best presents for everyone on your list.",
      button: "Read More",
    },
    {
      heading: "Cleaner Fashion",
      img: "https://images.unsplash.com/photo-1528122819723-9dca3a31295d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VzdGFpbmFiaWxpdHl8ZW58MHwxfDB8fHww",
      title: "See the sustainability efforts behind each of our products.",
      button: "Learn More",
    },
  ];
  return (
    <div className="container mx-auto mt-6">
      <div className="md:hidden">
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
          className="mySwiper"
        >
          {articles.map((card, index) => (
            <SwiperSlide key={index}>
              <ArticleImageMobile obj={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden md:block">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
          className="mySwiper mx-4"
        >
          {articles.map((card, index) => (
            <SwiperSlide key={index}>
              <ArticleImage obj={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <hr class=" mt-4 container hidden md:block mx-auto h-px bg-gray-800 border-0 dark:bg-gray-700" /> */}
    </div>
  );
};

export default Article;
