import React, { useState } from "react";
import * as style from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper";
import Card from "./Card";
import {TeamList} from "./data";


const Team = () => {
  return (
    <style.Content>
       <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
         autoplay={{
                    display: 2000,
                    disableOnInteraction:false,
                }}
        coverflowEffect={{
          rotate: 50,
          stretch: 3,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
      {TeamList.map((event,i) => (
        <SwiperSlide>
            <Card
                image={event.image} 
                grade={event.grade}
                name={event.name}
            />
        </SwiperSlide>   
        ))}
      </Swiper>
    </style.Content>
  );
}

export default Team;