import React, { useState, useEffect, useContext } from "react";
import * as style from "./styles";

import image1 from '../../image/prize/10.png';
import image2 from '../../image/prize/60.png';
import image3 from '../../image/prize/cup-g524793a03_1920.png';
import image4 from '../../image/prize/all-in-one.png';

function Prize() {
    const data = [
        {
            title:'10년 경력 메타버스 기업',
            content: '대한민국 유일! 10년 경력의 믿을 수 있는 메타버스 그룹 GBF Studio'
        },
        {
            title:'60명의 전문 인력 보유',
            content: '공간 구현 설계, 복셀아트 전문가 및 디자인, 개발, CS, 음악제작의 전문인력을 갖추고 있습니다.'
        },
        {
            title:'한국광고대상 수상',
            content: '풍부한 경험과 노하우의 체게적인 제작시스템으로 다수의 수상경력을 보유하고 있습니다.'
        },
        {
            title:'올인원 프로젝트',
            content: '시작부터 끝까지, 전부 원스탭! 공간구현뿐만 아닌, 개발, CS, 음악제작까지 만족도 높은 서비스를 제공합니다.'
        },
    ]
  
    const Item = (props) => {
        return(
            <style.column>
                <style.prize src={props.image}/>
                <style.title>{props.title}</style.title>
                <style.content>{props.content}</style.content>
            </style.column>
        );
    }
  return (
    <style.Content>
        <style.enter>
            <style.row>
                <Item image={image1} title={data[0].title} content={data[0].content}/>
                <Item image={image2} title={data[1].title} content={data[1].content}/>
            </style.row>
            <style.row>
                <Item image={image3} title={data[2].title} content={data[2].content}/>
                <Item image={image4} title={data[3].title} content={data[3].content}/>
            </style.row>
        </style.enter>
    </style.Content>
    
  );
}

export default Prize;