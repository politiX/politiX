import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "../styles/swipe.css";

// import Swiper core and required modules
import SwiperCore, { Grid, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Grid]);
SwiperCore.use([Navigation]);

export default function Swipe({ categories, handleSwiperClick }) {
  const navItems = categories.map((category, index) => (
    <SwiperSlide key={index}>
      <p onClick={handleSwiperClick}>{category}</p>
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 1,
        }}
        loop={true}
        spaceBetween={30}
        className="mySwiper"
        clickable={0}
        shortSwipes={false}
        slideToClickedSlide={true}
        simulateTouch={true}
        navigation={true}
        nextEl={".swiper-button-next"}
        prevEl={".swiper-button-prev"}
      >
        {navItems}
      </Swiper>
    </>
  );
}
