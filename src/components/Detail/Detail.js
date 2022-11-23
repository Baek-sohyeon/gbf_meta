import React, { useState, useEffect, useContext } from "react";
import * as style from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCards, Autoplay } from "swiper";

import image1 from '../../image/n_3@2x.png';
import image2 from '../../image/n_4_ey@2x.png';
import image3 from '../../image/n_5_ez@2x.png';
import Button from "../Button/Button";

function Detail() {
  
  useEffect(() => {
    }, []);
  

  return (
    <style.Content>

            <style.ImageContainer>
                <Swiper
                autoplay={{
                    display: 2000,
                    disableOnInteraction:false,
                }}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                className="mySwiper"
                >
                    <SwiperSlide><style.RoundImage src={image1}/></SwiperSlide>
                    <SwiperSlide><style.RoundImage src={image2}/></SwiperSlide>
                    <SwiperSlide><style.RoundImage src={image3}/></SwiperSlide>

                </Swiper>
            </style.ImageContainer>
            


        <style.ContentRight>

            <style.Title>하나의 작품에도</style.Title>
            <style.row>
                <style.Title>최선을 다하는 </style.Title>
                <style.Mark>GBF META</style.Mark>
            </style.row>
            <style.explain>
                GBF 는 다양한 메타버스 서비스들을 구축하고 10년동안 운영해온 풍부한 경험으로 기획, 디자인, 개발 및 CS부터 음원제작과 운영까지
                GBF는 고객의 디지털 서비스를 위해 수준 높은 결과물을 제작하는 메타버스 기업 (Metaverse Company) 입니다. 60명의 분야별 전문가 투입을 하여 건축, 교육, 개발, 디자인, 음악, 영상, CS, 마케팅 등의 사업부에서 각 분야별 전문 분야의 다양한 경험과
                메타버스에 대한 깊은 지식을 갖추고 있는 실무진이 투입됩니다.
            </style.explain>
            <style.buttonContainer>
                <Button name={'자세히 알아보기'} background={'rgba(255,153,0,1)'} style={{marginRight: '10px'}}/>
                <Button name={'문의하기'} color={'rgba(255,153,0,1)'} background={'transparent'}/>
            </style.buttonContainer>

        </style.ContentRight>
    </style.Content>
    
  );
}

export default Detail;