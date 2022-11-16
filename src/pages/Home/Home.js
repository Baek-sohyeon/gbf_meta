import React, { useState, useEffect } from "react";
import * as style from "./styles";
import homeImg from '../../image/homeImg.png'
import centerImg from '../../image/n__16@2x.png';
import Detail from "../../components/Detail/Detail";
import TypeWriter from "../../components/TypeWriter/TypeWriter";
import Service from "../../components/Service/Service";
import Detail2 from "../../components/Detail2/Detail2";
import ClientPartners from "../../components/ClientPartners/ClientPartners";

function Home() {



  return (
    <>
      <style.Container>
      <style.mainContainer>
        <style.mainImg src={homeImg} />
        <style.centerImg src={centerImg}/>
        <style.textContainer>
          <style.text1>METAVERSE</style.text1>
          <style.text2>BUILDER STUDIO</style.text2>
          <TypeWriter/>
        </style.textContainer>
       </style.mainContainer>
      </style.Container>
      <Detail/>
      <Service/>
      <Detail2/>
      <ClientPartners/>


    </>
    

  );
}
export default Home;