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
  display: flex;
  ${'' /* flex-direction: column; */}
  width: 100%;
  height: 30%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
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

export const Text1 = styled.p`
    font-size: 18px;
    font-weight: bold;
    color:  white;
    margin: 2px;
    white-space: nowrap;
    text-align: center;
`;

export const Text2 = styled.p`
    font-size: 28px;
    font-weight: bold;
    color: rgba(255,153,0,1);
    margin: 12px;
    white-space: nowrap;
    text-align: center;

`;


const Card = (props) => {
  return (
    <CardContainer>
        <CardTop>
            <CardImage src={props.image}/>
        </CardTop>
        <CardBottom>
          <Text1>{props.grade}</Text1>
          <Text2>{props.name}</Text2>
        </CardBottom>
    </CardContainer>
  );
}

export default Card;

