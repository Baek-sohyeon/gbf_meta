import React, { useState } from "react";
import * as style from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper";
import Card from "./Card";


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
        // pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
      {/* <Card/> */}
        <SwiperSlide>
            <Card image={require('../../image/member/딜로이트.png')}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/멤버-디코.png")}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/서승완.png")}/>
        </SwiperSlide>
         <SwiperSlide>
            <Card image={require("../../image/member/신준.png")}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/아빠.png")}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/얼굴 동하.png")}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/얼굴 루인.png")}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/얼굴 선영.png")}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/얼굴 여우비.png")}/>
        </SwiperSlide>
         <SwiperSlide>
            <Card image={require("../../image/member/얼굴 연탄.png")}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/얼굴 칠지.png")}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/얼굴 크코.png")}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/얼굴 허니.png")}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/얼굴 홍.png")}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/얼굴도토.png")}/>
        </SwiperSlide>
         <SwiperSlide>
            <Card image={require("../../image/member/얼굴루에나.png")}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/얼굴매냐.png")}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/얼굴비마.png")}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/얼굴스터.png")}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/얼굴스파이.png")}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/얼굴자베.png")}/>
        </SwiperSlide>
         <SwiperSlide>
            <Card image={require("../../image/member/얼굴준.png")}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/얼굴찬희.png")}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/얼굴픽스.png")}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={require("../../image/member/이태현.png")}/>
        </SwiperSlide>
      </Swiper>
    </style.Content>
  );
}

export default Team;
