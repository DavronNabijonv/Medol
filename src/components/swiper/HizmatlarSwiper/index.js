import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.css'; // Main Swiper styles
import 'swiper/css/pagination'; // Additional styles for pagination, if needed
import 'swiper/css/navigation'; // Additional styles for navigation, if needed

import "./styles.scss";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import qayd from '../../../assets/images/qayd.png';
import kargo from '../../../assets/images/kargo.png';
import xizmat from '../../../assets/images/xizmat.png';
import Button from "../../button";

export function HizmatlarSwiper(props) {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        slidesPerView={props.sh}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card">
            <img src={xizmat} className="cardimg" />
            <p className="ttl">СЕРВИС ОБОРУДОВАНИЯ</p>
            <p className="prg">
              Компания предоставляет сервисное обслуживание по всем
              предоставляемым продуктам. У наших инженеров имеется опыт и
              сертификаты фирм производителей......
            </p>
            <Button btnName="Подробнее" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={qayd} className="cardimg" />
            <p className="ttl">СЕРВИС ОБОРУДОВАНИЯ</p>
            <p className="prg">
              Компания предоставляет сервисное обслуживание по всем
              предоставляемым продуктам. У наших инженеров имеется опыт и
              сертификаты фирм производителей......
            </p>
            <Button btnName="Подробнее" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src={kargo} className="cardimg" />
            <p className="ttl">СЕРВИС ОБОРУДОВАНИЯ</p>
            <p className="prg">
              Компания предоставляет сервисное обслуживание по всем
              предоставляемым продуктам. У наших инженеров имеется опыт и
              сертификаты фирм производителей......
            </p>
            <Button btnName="Подробнее" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
