import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Content = styled.div`
    position: absolute;
    height: 500px;
    width: 100%;
    background:rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
   
    ${'' /* .swiper {
        width: 90%;
    } */}
     .swiper-slide {
        text-align: center;
    }
    ${'' /* .swiper-slide-active {
        width: 1000px;
        align-items: center;
    }
    .swiper-wrapper {
        width: 100%;
        height: 300px;
    } */}
`
const Image = styled.img`
    width: 600px;
    height: 400px;
  @media (max-width: 32em){
      width: 100%;
  }
`

const Exit = styled.img`
   position: absolute;
   top:10px;
   right: 20px;
   padding: 10px;

`
const Minecraft = (props) => {

    const click = () => {
        props.setData(!props.data);
        console.log('minecraft')

    }

  return (
    <>
    <Content>
        <div style = {{position:"absolute", top:'10px', right:'20px' }} onClick={click}>
            <img src={require('../../components/assets/image/x.png')}/>
        </div>
        <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image src={require('../../components/assets/image/portfolio/minecraft/RTX참여작.png')}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={require('../../components/assets/image/portfolio/minecraft/디코기차.png')}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={require('../../components/assets/image/portfolio/minecraft/부동산렌더링사진.jpg')}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={require('../../components/assets/image/portfolio/minecraft/부동산렌더링사진2.jpg')}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={require('../../components/assets/image/portfolio/minecraft/아티스트코리아 합작.jpg')}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={require('../../components/assets/image/portfolio/minecraft/인천1945시장.png')}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={require('../../components/assets/image/portfolio/minecraft/인천1945학교.png')}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={require('../../components/assets/image/portfolio/minecraft/인천로봇랜드.png')}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={require('../../components/assets/image/portfolio/minecraft/인천로봇랜드2.png')}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={require('../../components/assets/image/portfolio/minecraft/인천크래프트-IP-1.jpg')}/>
        </SwiperSlide>
      </Swiper>
    </Content>
    </>

  );
}

export default Minecraft;

