import React, { useState, useEffect, useContext } from "react";
import ServiceCard from "../ServiceCard/Servicecard";
import * as style from "./styles";
import Minecraft from '../../components/assets/image/minecraft.png';
import Unity from '../../components/assets/image/unity.png';
import Sandbox from '../../components/assets/image/sandbox.png';
import Prize from "../Prize/Prize";

function Service() {
  
    const card1 = 'GBF는 마인크래프트를 활용하여 유튜브 크리에이터 타운 공간, 인천크래프트, 나이키 메타버스 워크숍, 청와대 온라인 행사 공간 등 수 많은 관공서와 기업과 협업을 진행하였습니다.';
    const card2 = 'Unity 엔진을 이용한 개인 맞춤형 메타버스 공간을 제공해드리고 있습니다. 문화, 교육, 체험 활동 등 원하시는 활동에 맞는 공간구축 및 설계, 모델링, 배경음악까지 제공을 해드리며 다양한 플랫폼에서 지원할 수 있도록 도와드리고 있습니다.';
    const card3 = '2022년 더 샌드박스 빌더 스튜디오로 선정되면서 공간 활용, 컨텐츠 부분에 있어서 최고의 결과물을 제작하고 있으며 CJ ENM, 스튜디오 드래곤, 경북, 인천등 다양한 관공서와 기업들과 계약을 진행해서 작업을 하였습니다.';

  useEffect(() => {
    }, []);
  

  return (
    <style.Content>
        <style.column>
            <style.row style={{flexDirection: 'row', marginBottom: '20px'}}>
                <style.text1>Our</style.text1>
                <style.text2>Service</style.text2>
            </style.row>
            <style.enter>
                <style.row>
                    <ServiceCard english={'Minecraft'} korean={'마인크래프트'} image={Minecraft} content={card1}/>
                    <ServiceCard english={'Unity'} korean={'유니티'} image={Unity} content={card2}/>
                </style.row>
                <style.row>
                     <ServiceCard english={'The Sandbox'} korean={'더 샌드박스'} image={Sandbox} content={card3}/>
                    <ServiceCard english={'Minecraft'} korean={'마인크래프트'} image={Minecraft} content={card1}/>
                </style.row>
            </style.enter>
            {/* <Prize/> */}
        </style.column>
       
    </style.Content>
    
  );
}

export default Service;