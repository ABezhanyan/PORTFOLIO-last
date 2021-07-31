import './SkillsAre.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import JS from '../../imgResume/JS.svg'
import REC from '../../imgResume/REACT.svg'
import HTML from '../../imgResume/HTML5.svg'
import VUE from  '../../imgResume/VUE.svg'
import NodeJS from '../../imgResume/NodeJS.svg'
import GIT from '../../imgResume/git.svg'
import CSS from '../../imgResume/CSS.svg'
import Angular from '../../imgResume/Angular.svg'

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/zoom/zoom.min.css";
import "swiper/components/a11y/a11y.min.css";
import "swiper/components/controller/controller.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import "swiper/components/lazy/lazy.min.css";
import "swiper/components/thumbs/thumbs.min.css";




// import Swiper core and required modules
import SwiperCore, { EffectCoverflow } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow]);

const SkillsAre = () => {
    return (
        <div className="skills-are-container">
            <div className="skills-are">
                <h2 className="skills-are-text">Skills are</h2>
            </div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                spaceBetween={50}
                initialSlide={4}
                parallax={true}
                coverflowEffect={{
                    rotate: 10,
                    stretch: 10,
                    depth: 300,
                    modifier: 1,
                    slideShadows: false,

                }}
                pagination={true}
                className="mySwiper"
            >
                <SwiperSlide className = "pop">
                    <img src={JS} className="img-sl" alt="pop" />
                </SwiperSlide>
                <SwiperSlide className = "pop">
                    <img src={REC} className="img-sl" alt="pop"/>
                </SwiperSlide>
                <SwiperSlide className = "pop">
                    <img src={HTML} className="img-sl" alt="pop"/>
                </SwiperSlide>
                <SwiperSlide className = "pop">
                    <img src={VUE} className="img-sl" alt="pop"/>
                </SwiperSlide>
                <SwiperSlide className = "pop">
                    <img src={NodeJS} className="img-sl" alt="pop"/>
                </SwiperSlide>
                <SwiperSlide className = "pop">
                    <img src={GIT} className="img-sl" alt="pop"/>
                </SwiperSlide>
                <SwiperSlide className = "pop">
                    <img src={CSS} className="img-sl" alt="pop"/>
                </SwiperSlide>
                <SwiperSlide className = "pop">
                    <img src={Angular} className="img-sl" alt="pop"/>
                </SwiperSlide>
                <SwiperSlide className = "pop">
                    <img src={Angular} className="img-sl" alt="pop"/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SkillsAre;