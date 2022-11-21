import React, { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const CardTop = styled.div`
  width: 100%;
  height: 70%;
  box-sizing: border-box;
    background: rgba(255,153,0,1);;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 22px 22px 0px 0px;

`;

const CardBottom= styled.div`
  width: 100%;
  height: 30%;
  box-sizing: border-box;

  background: rgb(32, 32, 32);
   border-radius: 0px 0px 22px 22px;
    border: 2px solid rgba(255, 255, 255, 0.5);
   
`;

const CardImage= styled.img`
  position: relative;
  width: 100%;
  height: 120%;
  bottom: 20%;
  transform-origin:100% 100%;
  z-index: 2;

   
`;

const Card = (props) => {
  return (
    <CardContainer>
        <CardTop>
            <CardImage src={props.image}/>
        </CardTop>
        <CardBottom></CardBottom>
    </CardContainer>
  );
}

export default Card;

