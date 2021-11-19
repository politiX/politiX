import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";

// import Swiper core and required modules
import SwiperCore, { Grid } from "swiper";

// install Swiper modules
SwiperCore.use([Grid]);

export default function Nav() {
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
        clickable={false}
        shortSwipes={false}
        simulateTouch={true}
      >
        <SwiperSlide>
          <a href="/bildung">Bildung</a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/umwelt">Umwelt</a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/gesundheit">Gesundheit</a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/wirtschaft">Wirtschaft</a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/about">Über uns</a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
