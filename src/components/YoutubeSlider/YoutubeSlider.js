import React, { useState, useEffect, useContext } from "react";
import * as style from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import YouTube from "react-youtube";

function YoutubeSlider() {
  

  return (
    <style.Content>
        <style.column>
        <style.TextWrap>
            <style.row style={{flexDirection: 'row', marginBottom: '10px'}}>
                <style.text1>GBF</style.text1>
                <style.text2>YOUTUBE</style.text2>
            </style.row>
             <style.text4>GBF 스튜디오의 다양한 영상들을 만나보세요.</style.text4>
        </style.TextWrap>

            <style.enter>
                <style.row>
                    <style.column>
                        <style.YoutubeWrap>
                            <YouTube videoId={'3qeGWtNcRTE'} opts={{width: "100%", height: "100%"}}/>
                            <style.text3>마인크래프트가 NFT를 버린 진짜 이유</style.text3>
                        </style.YoutubeWrap>      
                          <style.YoutubeWrap>
                            <YouTube videoId={'btLGd9fBGo8'} opts={{width: "100%", height: "100%"}}/>
                            <style.text3>오징어게임 (100시간 마인크래프트 건축)</style.text3>
                        </style.YoutubeWrap>    
                    </style.column>
                     <style.column>
                        <style.YoutubeWrap>
                            <YouTube videoId={'XTuw4BtlDqg'} opts={{width: "100%", height: "100%"}}/>
                            <style.text3>마인크래프트로 비싸게 만들어진 인천공항</style.text3>
                        </style.YoutubeWrap>     
                        <style.YoutubeWrap>
                            <YouTube videoId={'_TKRCpk2bv0'} opts={{width: "100%", height: "100%"}}/>
                            <style.text3>[마인크래프트 건축] 모장에 이름을 올린 건축가 '하루'의 일대기</style.text3>
                        </style.YoutubeWrap>     
                    </style.column>
                </style.row>
                <style.row>
                    <style.column>
                        <style.YoutubeWrap>
                            <YouTube videoId={'3qeGWtNcRTE'} opts={{width: "100%", height: "100%"}}/>
                            <style.text3>마인크래프트가 NFT를 버린 진짜 이유</style.text3>
                        </style.YoutubeWrap>      
                          <style.YoutubeWrap>
                            <YouTube videoId={'btLGd9fBGo8'} opts={{width: "100%", height: "100%"}}/>
                            <style.text3>오징어게임 (100시간 마인크래프트 건축)</style.text3>
                        </style.YoutubeWrap>    
                    </style.column>
                     <style.column>
                        <style.YoutubeWrap>
                            <YouTube videoId={'XTuw4BtlDqg'} opts={{width: "100%", height: "100%"}}/>
                            <style.text3>마인크래프트로 비싸게 만들어진 인천공항</style.text3>
                        </style.YoutubeWrap>     
                        <style.YoutubeWrap>
                            <YouTube videoId={'_TKRCpk2bv0'} opts={{width: "100%", height: "100%"}}/>
                            <style.text3>[마인크래프트 건축] 모장에 이름을 올린 건축가 '하루'의 일대기</style.text3>
                        </style.YoutubeWrap>     
                    </style.column>
                </style.row>
            </style.enter>
        </style.column>
       
    </style.Content>
    
  );
}

export default YoutubeSlider;