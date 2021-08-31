import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "./BurgerSlider.scss";
import "../BurgerMain/BurgerMain"
import Back from "../../../imgResume/back.svg"
import BugIc from "../../../imgResume/burgerOne.png"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';
import {NavLink} from "react-router-dom";

// install Swiper modules
SwiperCore.use([]);


const BurgerSlider = () => {
    return (
            <div className="burger_slide-container" id="slider">
                <div className="burger_slide">
                    <Swiper spaceBetween={60} pagination={{
                        "clickable": true
                    }} className="mySwiper">
                        <SwiperSlide className = "BugSlide">
                            <NavLink className="back-burger" to="/"><img src={Back} className="back-img"/></NavLink>
                            <div className="bug-slide-one">
                                <div className="bug-head-icon">
                                    <h2 className="burger-text">McDonald’s</h2>
                                    <span className="bug"><img src={BugIc} className="bug-icon"/></span>
                                </div>
                                <div>
                                    <p className="bug-text">Описание:
                                        описание описание описание описание описание описание описание описание
                                        описание описание описание описание описание описание
                                        описание описание описание описание описание описание описание описание описание описание описание</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className = "BugSlide">
                            <NavLink className="back-burger" to="/"><img src={Back} className="back-img"/></NavLink>
                            <div className="bug-slide-one">
                                <div className="bug-head-icon">
                                    <h2 className="burger-text">McDonald’s</h2>
                                    <span className="bug"><img src={BugIc} className="bug-icon"/></span>
                                </div>
                                <div>
                                    <p className="bug-text">Описание:
                                        описание описание описание описание описание описание описание описание
                                        описание описание описание описание описание описание
                                        описание описание описание описание описание описание описание описание описание описание описание</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className = "BugSlide">
                            <NavLink className="back-burger" to="/"><img src={Back} className="back-img"/></NavLink>
                            <div className="bug-slide-one">
                                <div className="bug-head-icon">
                                    <h2 className="burger-text">McDonald’s</h2>
                                    <span className="bug"><img src={BugIc} className="bug-icon"/></span>
                                </div>
                                <div>
                                    <p className="bug-text">Описание:
                                        описание описание описание описание описание описание описание описание
                                        описание описание описание описание описание описание
                                        описание описание описание описание описание описание описание описание описание описание описание</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className = "BugSlide">
                            <NavLink className="back-burger" to="/"><img src={Back} className="back-img"/></NavLink>
                            <div className="bug-slide-one">
                                <div className="bug-head-icon">
                                    <h2 className="burger-text">McDonald’s</h2>
                                    <span className="bug"><img src={BugIc} className="bug-icon"/></span>
                                </div>
                                <div>
                                    <p className="bug-text">Описание:
                                        описание описание описание описание описание описание описание описание
                                        описание описание описание описание описание описание
                                        описание описание описание описание описание описание описание описание описание описание описание</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className = "BugSlide">
                            <NavLink className="back-burger" to="/"><img src={Back} className="back-img"/></NavLink>
                            <div className="bug-slide-one">
                                <div className="bug-head-icon">
                                    <h2 className="burger-text">McDonald’s</h2>
                                    <span className="bug"><img src={BugIc} className="bug-icon"/></span>
                                </div>
                                <div>
                                    <p className="bug-text">Описание:
                                        описание описание описание описание описание описание описание описание
                                        описание описание описание описание описание описание
                                        описание описание описание описание описание описание описание описание описание описание описание</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className = "BugSlide">
                            <NavLink className="back-burger" to="/"><img src={Back} className="back-img"/></NavLink>
                            <div className="bug-slide-one">
                                <div className="bug-head-icon">
                                    <h2 className="burger-text">McDonald’s</h2>
                                    <span className="bug"><img src={BugIc} className="bug-icon"/></span>
                                </div>
                                <div>
                                    <p className="bug-text">Описание:
                                        описание описание описание описание описание описание описание описание
                                        описание описание описание описание описание описание
                                        описание описание описание описание описание описание описание описание описание описание описание</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className = "BugSlide">
                            <NavLink className="back-burger" to="/"><img src={Back} className="back-img"/></NavLink>
                            <div className="bug-slide-one">
                                <div className="bug-head-icon">
                                    <h2 className="burger-text">McDonald’s</h2>
                                    <span className="bug"><img src={BugIc} className="bug-icon"/></span>
                                </div>
                                <div>
                                    <p className="bug-text">Описание:
                                        описание описание описание описание описание описание описание описание
                                        описание описание описание описание описание описание
                                        описание описание описание описание описание описание описание описание описание описание описание</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className = "BugSlide">
                            <NavLink className="back-burger" to="/"><img src={Back} className="back-img"/></NavLink>
                            <div className="bug-slide-one">
                                <div className="bug-head-icon">
                                    <h2 className="burger-text">McDonald’s</h2>
                                    <span className="bug"><img src={BugIc} className="bug-icon"/></span>
                                </div>
                                <div>
                                    <p className="bug-text">Описание:
                                        описание описание описание описание описание описание описание описание
                                        описание описание описание описание описание описание
                                        описание описание описание описание описание описание описание описание описание описание описание</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className = "BugSlide">
                            <NavLink className="back-burger" to="/"><img src={Back} className="back-img"/></NavLink>
                            <div className="bug-slide-one">
                                <div className="bug-head-icon">
                                    <h2 className="burger-text">McDonald’s</h2>
                                    <span className="bug"><img src={BugIc} className="bug-icon"/></span>
                                </div>
                                <div>
                                    <p className="bug-text">Описание:
                                        описание описание описание описание описание описание описание описание
                                        описание описание описание описание описание описание
                                        описание описание описание описание описание описание описание описание описание описание описание</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
    );
}

export default BurgerSlider;