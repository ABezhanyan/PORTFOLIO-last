import './SkillsAre.scss'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import JS from '../../imgResume/pic.svg'
import REC from '../../imgResume/pic.svg'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";


// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const SkillsAre = () => {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 10,
                    depth: 50,
                    modifier: 3,
                    slideShadows: true
                }}
                pagination={true}
                className="mySwiper"
            >
                <SwiperSlide className = "pop">
                    <img src={JS} className="img-sl" />
                </SwiperSlide>
                <SwiperSlide className = "pop">
                    <img src={REC} className="img-sl" />
                </SwiperSlide>
                <SwiperSlide className = "pop">
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="img-sl" />
                </SwiperSlide>
                <SwiperSlide className = "pop">
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" className="img-sl" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default SkillsAre;