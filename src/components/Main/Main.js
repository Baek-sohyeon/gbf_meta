import React, { useState, useEffect, useContext } from "react";
import * as style from "./styles";
import YouTube from 'react-youtube';
import styled from "styled-components";
import ReactPlayer from 'react-player';

function Main() {
  

  return (
    <style.Content>
        <style.column>
        <style.TextWrap>
            <style.row style={{flexDirection: 'row', marginBottom: '10px'}}>
                <style.text1>많은 기업들이</style.text1>
                <style.text2>GBF-META</style.text2>
                <style.text1>를 선택했습니다.</style.text1>
            </style.row>
            <style.text3>정부, 지자체, 대기업 등 대한민국 여러 빅브랜드가 메타버스를 경험했습니다.</style.text3>
        </style.TextWrap>

            <style.enter>
                <style.VideoWrap>
                    <style.Video>
                        <ReactPlayer url={'https://www.youtube.com/watch?v=bpwVkSDn0_o'} playing loop controls width={'100%'} height={'100%'} 
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: 0
                            }} />
                    </style.Video>
                </style.VideoWrap>
            </style.enter>
        </style.column>
       
    </style.Content>
    
  );
}

export default Main;