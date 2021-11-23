import React from "react";
import {useState} from "react"
import {Pagination, A11y} from 'swiper'
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "../styles/swipe.css"

// import Swiper core and required modules
import SwiperCore, {Grid} from "swiper";

// install Swiper modules
SwiperCore.use([Grid]);

export default function Nav() {

    const handleSwiperClick = (e) => {
        console.log('load content for', e.target.innerText)

        //    trigger function in Layout component or index page to load content...

        //    set dynamic nested rout (URL):
        //    ---> https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
    }

    const categories = ['Bildung', 'Umwelt', 'Gesundheit', 'Wirtschaft']

    const navItems = categories.map((category, index) =>
        <SwiperSlide key={index}>
            <p onClick={handleSwiperClick}>{category}</p>
        </SwiperSlide>
    )

    return (
        <>
            <Swiper
                moddules={[Pagination, A11y]}
                slidesPerView={4}
                grid={{
                    rows: 1,
                }}
                loop={true}
                spaceBetween={50}
                className="mySwiper"
                clickable={0}
                shortSwipes={false}
                simulateTouch={true}
                slideToClickedSlide={true}
                simulateTouch={true}
                onSwipe={() => {
                    console.log('swipe')
                }}
                pagination={{clickable: true}}
            >
                {navItems}
            </Swiper>
        </>
    );
}
