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

`

const Exit = styled.img`
   position: absolute;
   top:0;
   right: 0;
   padding: 10px;

`
const Minecraft = (props) => {

    const click = () => {
        props.setData(!props.data);
    }

  return (
    <>
    <Content>
        <div style = {{position:"absolute", top:0, right:0 }} onClick={click}>
            <img src={require('../../image/x.png')}/>
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
          <Image src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        
      </Swiper>
    </Content>
    </>

  );
}

export default Minecraft;

