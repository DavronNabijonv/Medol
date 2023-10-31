import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";

// import required modules
import { Navigation } from "swiper/modules";
import { New } from "../../../db/news";
import Button from "../../button";

export function YangiliklarSwiper(props) {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={0}
        centeredSlides={false}
        navigation={true}
        slidesPerView={props.nm}
        modules={[Navigation]}
        className="mySwiper"
      >
        {New.map((r, index) => (
          <SwiperSlide>
            <div className="card" key={index}>
              <img src={r.img} className="cimg" />
              <p className="tt">{r.title}</p>
              <p className="sana">{r.data}</p>
              <p className="text">{r.text}</p>
              <Button btnName="Подробнее" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
