import React, { useState, useEffect, useContext } from "react";
import * as style from "./styles";
import making from '../../components/assets/image/making.gif'
import Button from "../Button/Button";

function Detail2() {
  

  return (
    <style.Content>
        <style.ContentLeft>
            <style.ImageContainer>
              <style.gif src={making}/>
            </style.ImageContainer>
        </style.ContentLeft>

        <style.ContentRight>
        
            <style.textTop>왜 많은 사람들이 GBF 빌더를 선택할까요?</style.textTop>
            <style.text1>WHY GBF?</style.text1>

            <style.explain>
                GBF 는 다양한 메타버스 서비스들을 구축하고 10년동안 운영해온 풍부한 경험으로 기획, 디자인, 개발 및 CS부터 음원제작과 운영까지
                GBF는 고객의 디지털 서비스를 위해 수준 높은 결과물을 제작하는 메타버스 기업 (Metaverse Company) 입니다.
                60명의 분야별 전문가 투입을 하여 건축, 교육, 개발, 디자인, 음악, 영상, CS, 마케팅 등의 사업부에서 각 분야별 전문 분야의 다양한 경험과
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

export default Detail2;