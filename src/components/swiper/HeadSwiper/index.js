import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slide1 from "../../../assets/images/slide1.png";
import slide2 from "../../../assets/images/slide2.png";
import slide3 from "../../../assets/images/slide3.png";
import Button from "../../button";

export function HeadSwiper() {
  return (
    <>
      <Swiper
      loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        slidesPerView={1}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          
            <div className="text">
              <p>Анализатор ABL800 FLEX</p>
              <p>
                Ориентированный на среднюю или высокую производительность
                тестов, анализатор ABL800 FLEX измеряет полный набор параметров,
                включая pH, газы крови, электролиты, метаболиты и показатели
                оксиметрии
              </p>
              <Button btnName="Подробнее" />
            </div>
            <div className="fimg">
              <div className="back">
                <img src={slide1} className="rasm1" />
              </div>
            </div>
        
        </SwiperSlide>
        <SwiperSlide>
            <div className="text">
              <p>Аппарат ИК-лазерный МАКДЭЛ-09.1</p>
              <p>
                Ориентированный на среднюю или высокую производительность
                тестов, анализатор ABL800 FLEX измеряет полный набор параметров,
                включая pH, газы крови, электролиты, метаболиты и показатели
                оксиметрии
              </p>
              <Button btnName="Подробнее" />
            </div>
            <div className="fimg">
              <div className="back">
                <img src={slide2} className="rasm2" />
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="text">
              <p>Глюкометр для измерения глюкозы</p>
              <p>
                Ориентированный на среднюю или высокую производительность
                тестов, анализатор ABL800 FLEX измеряет полный набор параметров,
                включая pH, газы крови, электролиты, метаболиты и показатели
                оксиметрии
              </p>
              <Button btnName="Подробнее" />
            </div>
            <div className="fimg">
              <div className="back">
                <img src={slide3} className="rasm3" />
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}