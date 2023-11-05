import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css"; // Main Swiper styles
import "swiper/css/pagination"; // Additional styles for pagination, if needed
import "swiper/css/navigation"; // Additional styles for navigation, if needed

import "./styles.scss";
import "./index.scss"

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { mahsulot } from "../../../db/product";
import {Link} from 'react-router-dom'

export default function ProductSwiper(props) {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={0}
        centeredSlides={false}
        navigation={true}
        slidesPerView={props.qy}
        modules={[Pagination, Navigation]}
        className="myswiper"
      >
        {mahsulot.map((r, index) => (
          <SwiperSlide>
            <div className="cardProduct" key={index}>
              <img className="cardImg" src={r.img} />
              <p className="text">{r.text}</p>
              <Link to="/buildPage">
                <button className="btn">Посмотреть все</button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
